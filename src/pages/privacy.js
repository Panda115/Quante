import React from "react";
import { PRIVACY } from "../constants/privacy";

const Privacy = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {PRIVACY.map((data) => (
              <>
                <h2>{data.title}</h2>
                {data.contents.map((content) => (
                  <>
                    {content.htmlContent ? (
                      <p
                        dangerouslySetInnerHTML={{ __html: content.details }}
                      />
                    ) : (
                      <p>{content.details}</p>
                    )}
                    {content.lists && (
                      <ul style={{ listStyleType: "disc" }}>
                        {content.lists.map((list) => (
                          <>
                            {content.htmlContentList ? (
                              <li
                                dangerouslySetInnerHTML={{ __html: list }}
                                className="mb-1"
                              />
                            ) : (
                              <li className="mb-1">{list}</li>
                            )}
                          </>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
