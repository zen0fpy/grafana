import React from 'react';
import { StoryboardDocumentElement, StoryboardVariable } from '../../types';
import { css } from '@emotion/css';

export function ShowStoryboardDocumentElementResult({
  element,
  result,
}: {
  element: StoryboardDocumentElement;
  result?: StoryboardVariable;
}): JSX.Element | null {
  if (result == null) {
    return null;
  }
  switch (element.type) {
    case 'markdown': {
      // we should parse markdown with a strict subset of options directly to JSX with a library like this:
      // https://github.com/rexxars/commonmark-react-renderer
      return <div> {result.value as JSX.Element} </div>;
    }
    // Maybe use the Table component here?
    case 'csv': {
      return (
        <table>
          <tbody>
            {(result.value as string[][]).map((r, ri) => (
              <tr key={ri}>
                {r.map((c, ci) => (
                  <td
                    className={css`
                      padding: 5px;
                    `}
                    key={ci}
                  >
                    {c as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    case 'plaintext': {
      return null;
    }
    case 'python': {
      return (
        <div>
          <div
            className={css`
              font-size: 10px;
              margin-top: 20px;
              opacity: 0.5;
            `}
          >
            RESULT:
          </div>
          <pre>{JSON.stringify(result)}</pre>
        </div>
      );
    }
    case 'query': {
      // TODO: Result of query as table
      return (
        <>
          <div>datasource: {element.datasource}</div>
          <div>
            query: <pre>{JSON.stringify(element.query)}</pre>
          </div>
        </>
      );
    }
  }
}