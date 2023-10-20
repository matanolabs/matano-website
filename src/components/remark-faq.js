const visit = require("unist-util-visit");
const zone = require("mdast-zone");

const json = require("../data/faq.json");
// const { FAQStructuredData } = require("./faq");

function FAQStructuredData(qas) {
  const items = qas.map(({ question, answer }) => {
    return {
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    };
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };
  return data;
}

const mapQAs = (qas) => {
  let ret = qas.flatMap(({ question, answer }) => {
    return [
      {
        type: "paragraph",
        children: [
          {
            type: "strong",
            children: [
              {
                type: "text",
                value: question,
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            value: answer,
          },
        ],
      },
    ];
  });
  const data = FAQStructuredData(json);
  const jsonStr = JSON.stringify(data);
  const script = `<script type="application/ld+json">
      {JSON.stringify(faqldjson)}
      </script>`;
  ret = ret.concat([
    {
      type: "export",
      value: `export const faqldjson = ${jsonStr};`,
    },
    {
      type: "jsx",
      value: script,
    },
  ]);
  return ret;
};

const getStructuredData = () => {
  const data = FAQStructuredData(json);
  const jsonStr = JSON.stringify(data);
  const script = `<script type="application/ld+json">
      {{${jsonStr}}}
      </script>`;
  return {
    type: "jsx",
    value: script,
  };
};

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
function plugin() {
  return (tree) => {
    zone(tree, "toc", (start, nodes, end) => {
      console.log(nodes);
      const cont = mapQAs(json);
      return [start, ...cont, end];
    });
  };
}

module.exports = plugin;
