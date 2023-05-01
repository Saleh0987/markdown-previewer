import React from 'react';
import './docs.css';

const Docs = ({ basicSyntax: { title, examples } }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {examples?.map((example, index) => (
        <div key={index} className="desc">
          <h2 className="name">{example.name}</h2>
          <p>{example.description}</p>
          <div className="all">
            <p>{example.examp}</p>
            <MarkdownSection title="markdown" content={example.markdown} />
            <HtmlCodeSection title="html" code={example.html} />
          </div>
          {renderOptionalExample(2, example)}
          {renderOptionalExample(3, example)}
          {renderOptionalExample(4, example)}
          {renderOptionalExample(5, example)}
          {renderOptionalExample(6, example)}
        </div>
      ))}
    </div>
  );
};

const MarkdownSection = ({ title, content }) => (
  <p>
    <h3>- {title}</h3>
    {content}
  </p>
);

const HtmlCodeSection = ({ title, code }) => (
  <code>
    <h3>- {title}</h3>
    {code}
  </code>
);

const renderOptionalExample = (index, example) => {
  if (example[`examp${index}`] && example[`markdown${index}`] && example[`html${index}`]) {
    return (
      <>
        <br />
        <div className="all">
          <p>{example[`examp${index}`]}</p>
          <MarkdownSection title="markdown" content={example[`markdown${index}`]} />
          <HtmlCodeSection title="html" code={example[`html${index}`]} />
        </div>
      </>
    );
  }
};

export default Docs;
