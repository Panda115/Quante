import React from "react";
import { TERMS } from "../constants/terms";

export default function TermsAndConditions() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{TERMS.title}</h2>
            {TERMS.description.map((item, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
            {TERMS.lists.map((list, index) => (
              <>
                <div className="d-flex ml-5">
                  <p className="mr-3">{index + 1}.</p>{" "}
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: list.content }}
                  />
                </div>

                {list.discListType ? (
                  <ul
                    style={{ listStyleType: "disc" }}
                    className="ml-5 pl-5 mb-3"
                  >
                    {list.contentList.map((list) => (
                      <li className="mb-1">{list}</li>
                    ))}
                  </ul>
                ) : list.listTypeNone ? (
                  <>
                    {list.contentList && (
                      <ol className="ml-5 pl-5 mb-3" key={index}>
                        {list.contentList.map((item, index) => (
                          <li
                            dangerouslySetInnerHTML={{ __html: item }}
                            class="mb-1"
                          />
                        ))}
                      </ol>
                    )}
                  </>
                ) : (
                  <>
                    {list.contentList && (
                      <ol
                        className="ml-5 pl-5 mb-3"
                        key={index}
                        type="I"
                        style={{ listStyle: "lower-roman" }}
                      >
                        {list.contentList.map((item, index) => (
                          <li
                            dangerouslySetInnerHTML={{ __html: item }}
                            class="mb-1"
                          />
                        ))}
                      </ol>
                    )}
                  </>
                )}
                {list.secondaryContent && (
                  <p
                    className="ml-5 pl-5"
                    dangerouslySetInnerHTML={{ __html: list.secondaryContent }}
                  />
                )}
                {list.secondaryDiscListType && (
                  <div class="ml-4">
                    <ul
                      style={{ listStyleType: "disc" }}
                      className="ml-5 pl-5 mb-3"
                    >
                      {list.secondaryList.map((list) => (
                        <li className="mb-1">{list}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
