import type { FC } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "./vsc-dark-plus";

export const ReactMarkdown: FC<{ content: string | undefined }> = (props) => {
  return (
    <Markdown
      components={{
        ul({ children }) {
          return <ul className="list-disc list-inside py-2">{children}</ul>;
        },
        p({ children }) {
          return <p className="py-2 relative">{children}</p>;
        },
        a({ children, href }) {
          return (
            <a
              className="underline cursor-pointer underline-offset-4 italic hover:text-red-500 transition"
              href={href ?? ""}
            >
              {children}
            </a>
          );
        },
        blockquote({ children }) {
          return (
            <blockquote className="pl-12 py-5 italic relative">
              <div className="border-l-8 border-white absolute h-full top-0 left-0" />
              {children}
            </blockquote>
          );
        },
        h2({ children }) {
          return (
            <h2 className="text-3xl text-purple2 font-bold py-8">{children}</h2>
          );
        },
        h3({ children }) {
          return (
            <h2 className="text-2xl text-purple2 font-bold py-8">{children}</h2>
          );
        },
        img({ src, alt }) {
          return (
            <span className="flex w-full relative justify-center py-6">
              <img src={src ?? ""} alt={alt ?? ""} width={500} height={500} />
            </span>
          );
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              style={vscDarkPlus}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code
              {...rest}
              className="rounded-md bg-[#1e1e1e] border border-[#414141] px-1 py-[0.5px] text-base"
            >
              {children}
            </code>
          );
        },
      }}
    >
      {props.content}
    </Markdown>
  );
};
