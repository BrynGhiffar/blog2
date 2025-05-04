---
title: "Simple Echo Server in Axum"
description: "Small article on creating a simple echo server using axum."
tech: ["rust"]
date: 2025-03-06
---
In this blog post, I would like to show you how to create a web socket server in rust using the axum web framework. Axum is another popular web framework in rust that makes creating web apps easier. Previously, I have written tutorials on how to create a websocket server using actix. However, because of a limitation I found with the websockets in actix (although it seems this has been [fixed](https://stackoverflow.com/questions/77207464/how-to-set-message-size-limit-for-actix-websocket-actorless)), I decided to give websockets in Axum a try by building a simple echo ws server. 

A simple echo server is a nice example, since it gives us the boilerplate for developing more complex backends, e.g. a instant messaging app. So, here we go.

Let’s start by creating a new rust project:
```sh
$ cargo new --bin axum-ws-tutorial
```

These are our dependencies.
```toml
# Cargo.toml

[package]
name = "axum-ws-tutorial"
version = "0.1.0"
edition = "2021"

[dependencies]
# Add axum dependency
axum = { version = "0.7.5", features = ["ws"] }

# tokio for asynchronous runtime
tokio = { version = "1.32.0", features = ["macros"] }
```
We start by creating a simple Hello World program that uses tokio’s async runtime. The `flavor = "current_thread"` here just means that we’re running all async tasks on the [current thread](https://docs.rs/tokio/latest/tokio/runtime/enum.RuntimeFlavor.html#variant.CurrentThread).

``` rust
// main.rs

#[tokio::main(flavor = "current_thread")]
async fn main() {
    println!("Hello, world!");
}
```
This is how we can get a simple REST “Hello World” endpoint running.
```rust
use axum::routing::get;
use axum::Router;

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let app = Router::new().route("/", get(|| async { "Hello World" }));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
```
Then, you can open your browser on `0.0.0.0:3000` and this should show up.

![browser websocket connected](/images/simple-echo-server-axum/rest-healthcheck.webp)

Now to add websockets.

We’ll create a new path `/ws`. This is where our web socket connection will live.

```rust
use axum::routing::get;
use axum::Router;

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello World" }))
        .route(
            "/ws",
            get(...),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
```
Then, we need to actually upgrade our normal `http` connection to a websocket connection, axum provides us with an extractor that allows us to do this. Generally, Axum extractors are structs that implement certain traits which allow them to extract certain data from requests such as their payload, url path parameters and query parameters. Aside from extracting data, extractors can also do other things, such as, in this case upgarding a normal http connection to a websocket connection. 

```rust
use axum::extract::WebSocketUpgrade;
use axum::routing::get;
use axum::Router;

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello World" }))
        .route(
            "/ws",
            get(|ws: WebSocketUpgrade| async { ws.on_upgrade(...) }),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
```
We can of course make the code look less dense, by moving the request handler into a function.
```rust
use axum::response::IntoResponse;
use axum::extract::WebSocketUpgrade;
use axum::routing::get;
use axum::Router;

async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {
    ws.on_upgrade(...)
}

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello World" }))
        .route(
            "/ws",
            get(ws_handler),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
```
We need to provide a callback in the `on_upgrade` method this is where we put what we want to do when we receive a message. In this case, we’ll just be creating an echo server. So, when we receive a message we simply want to return it.

```rust
use axum::extract::ws::Message;
use axum::extract::ws::WebSocket;
use axum::response::IntoResponse;
use axum::extract::WebSocketUpgrade;
use axum::routing::get;
use axum::Router;

async fn websocket(mut socket: WebSocket) {
    loop {
        let msg = match socket.recv().await {
            Some(Ok(msg)) => msg,
            Some(Err(err)) => {
                eprint!("error: {}", err);
                continue;
            }
            None => continue,
        };

        match msg {
            Message::Text(text) => {
                socket.send(Message::Text(text)).await.unwrap();
            }
            _ => continue,
        };
    }
}

async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {
    ws.on_upgrade(websocket)
}

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Hello World" }))
        .route(
            "/ws",
            get(ws_handler),
        );

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();

    axum::serve(listener, app).await.unwrap();
}
```
And that's our echo server! We can develop this further into a more complex application that uses it's own thread to run the application logic. So, the websocket server will just be sending messages between that thread and the websocket client thread. But, that's out of the scope of this article!

Thanks for reading.