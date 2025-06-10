import React, { useEffect, useRef } from 'react';

interface AnimatedHTMLTextProps {
  html: string;
}

const AnimatedHTMLText: React.FC<AnimatedHTMLTextProps> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = html;

    let charIndex = 0;

    const wrapTextNodes = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          const wrapped = text.split('').map(char => {
            const span = document.createElement('span');
            span.className = 'letter';
            span.style.animationDelay = `${charIndex * 0.03}s`;
            span.textContent = char;
            charIndex++;
            return span;
          });
      
          const fragment = document.createDocumentFragment();
          wrapped.forEach(span => fragment.appendChild(span));
          (node as ChildNode).replaceWith(fragment); // ✅ Cast here
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.childNodes.forEach(wrapTextNodes);
        }
      };
    container.childNodes.forEach(wrapTextNodes);
  }, [html]);

  return <div ref={containerRef} className="animated-html-text" />;
};

export default AnimatedHTMLText;
