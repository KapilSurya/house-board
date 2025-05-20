
import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 text-houseboard-dark" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-houseboard-dark" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-6 mb-3 text-houseboard-dark" {...props} />,
        p: ({ node, ...props }) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 text-gray-700" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 text-gray-700" {...props} />,
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-pink-400 pl-4 italic my-6 text-gray-600 bg-pink-50/50 p-3 rounded" {...props} />
        ),
        img: ({ node, alt, src, ...props }) => (
          <img 
            src={src} 
            alt={alt} 
            className="mx-auto my-6 rounded-lg shadow-md max-w-full" 
            {...props} 
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
