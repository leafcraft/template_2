import React, { useState } from "react";
import Article1 from "../assets/article1.png";
import Article2 from "../assets/article2.png";
import Article3 from "../assets/article3.png";

const List = [
  {
    Title: "AI search startup Subtl.ai raises $1,00,000 in angel funding",
    content:
      "Subtl.ai, a cognitive artificial intelligence search engine, has raised $1,00,000 in angel funding from Mohit Gulati of ITI growth opportunities fund and G Vamshi Raju",
    Link: "https://www.thehindubusinessline.com/info-tech/ai-search-startup-subtlai-raises-1-million-in-angel-funding/article66567096.ece",
    Date: "March 01, 2023 . 6 mins",
  },
  {
    Title: "IIITH AI search startup, subtl.ai raises angel funding",
    content:
      "Subtl.ai closes angel investment from new age investors in the Indian ecosystem, Mohit Gulati (ITI Growth opportunities fund) and Vamshi Raju (Edha Investments, Shreyas Media).",
    Link: "https://bizrapidx.com/business/iiith-ai-search-startup-subtl-ai-raises-angel-funding/",
    Date: "March 02, 2023 . 5 mins",
  },
  {
    Title:
      "Too many documents, too little time? This IIIT Hyderabad start-up will help you fish out the exact data you are looking for",
    content:
      "Is finding the information you need from lengthy documents akin to looking for a needle in a haystack? We tell you how start-up Subtl.ai can help everybody find the information that they need",
    Link: "https://www.edexlive.com/happening/2020/dec/14/too-many-documents-too-little-time-this-iiit-hyderabad-start-up-will-help-you-fish-out-the-exact-d-16579.html",
    Date: "March 23, 2021 . 6 mins",
  },
  {
    Title: "Tech Translation Tales: Product Labs Shows How",
    content:
      "In the first of a series of startup stories from the Product Labs stable, we take a look at a sophisticated Natural Language Processing (NLP) ...",
    Link: "https://blogs.iiit.ac.in/product-labs/",
    Date: "February 28, 2021",
  },
  {
    Title: "Hyderabad-based Subtl develops bot to aid customer service segment",
    content:
      "For many, contacting a customer service centre and waiting for them to reply is agonizing. While they place the call on hold, they sift through",
    Link: "https://telanganatoday.com/extract-relevant-info-with-subtl-ais-new-tech",
    Date: "February 28, 2021",
  },

  {
    Title:
      "CHIREC Alumnus, Vishnu Ramesh, CEO and Co-founder of Subtl.AI – a startup seeded at IIIT Hyderabad",
    content:
      "What if technology-enabled your voice to take over the functions of the Ctrl-F key? CHIREC Alumnus, Vishnu Ramesh, CEO and Co-founder of Subtl.AI.",
    Link: "https://www.chirec.ac.in/announcements?Category=People%20of%20CHIREC&PostID=190",
    Date: "March 23, 2021 . 6 mins",
  },
  {
    Title:
      "30 Startups To Watch: Startups That Caught Our Eye In September 2022",
    content:
      "People often look up specific queries on the internet using standard search engines like Google and Bing. But these public search tools do not work in private settings.",
    Link: "https://inc42.com/startups/30-startups-to-watch-startups-that-caught-our-eye-in-september-2022/",
    Date: "October 02, 2022.",
  },
  {
    Title: "YourStory presents 50 most promising Indian startups",
    content:
      "Having to flip through a 20,000-page document to find just the relevant information is not only taxing but a sheer waste of time. One might even try the good old ‘Ctrl F’, but what if you are looking for something related to ‘assets’ in the document, which instead uses the term ‘properties’?",
    Link: "https://yourstory.com/2021/12/tech50-hyderabad-startup-subtlai-extract-exact-information-documents",
    Date: "December 28, 2021.",
  },
];

const Articles = () => {
  const [show, setShow] = useState(false);
  const [limit, setlimit] = useState(3);

  return (
    <div id="blog" className="flex flex-col items-center max-w-full mt-0 ml-0 bg-white px-5 py-10">
      <h1 className="text-zinc-600 text-center font-bold text-6xl self-center ml-0.5 mt-8 max-md:text-4xl">
        Recent articles
      </h1>
      <div className="flex flex-col items-center max-w-[1280px] mt-16 mb-10 max-md:max-w-full transition  ">
        <div className="grid grid-cols-3 md:gap-5 gap-0 max-md:grid-cols-1 max-md:items-stretch">
          {show
            ? List.map((article, index) => (
                <a
                  key={index}
                  href={article.Link}
                  target="_blank"
                  className="flex justify-between flex-col mt-8 w-full max-md:w-full  overflow-hidden border p-2 px-4 rounded-3xl border-black hover:shadow-xl border-opacity-60 hover:border-opacity-100 transition-all duration-300"
                >
                  <div className="text-black    font-bold tracking-normal text-lg mt-5">
                    {article.Title}
                  </div>

                  <div>
                    <div className="text-black font-semibold opacity-60 tracking-normal text-base mt-5 max-h-48 overflow-hidden  overflow-ellipsis ">
                      {article.content.slice(0, 200)}...
                    </div>
                  </div>
                  <div className=" mt-2">{article.Date}</div>
                </a>
              ))
            : List.slice(0, 3).map((article, index) => (
                <a
                  key={index}
                  href={article.Link}
                  target="_blank"
                  className="flex justify-between flex-col mt-8 w-full max-md:w-full  overflow-hidden border p-2 px-4 rounded-3xl border-black hover:shadow-xl border-opacity-60 hover:border-opacity-100 transition-all duration-300"
                >
                  <div className="text-black    font-bold tracking-normal text-lg mt-5">
                    {article.Title}
                  </div>

                  <div>
                    <div className="text-black font-semibold opacity-60 tracking-normal text-base mt-5 max-h-48 overflow-hidden  overflow-ellipsis ">
                      {article.content.slice(0, 200)}...
                    </div>
                  </div>
                  <div className=" mt-2">{article.Date}</div>
                </a>
              ))}
        </div>

        <div
          onClick={() => setShow(!show)}
          className="text-black text-center text-sm self-center border hover:shadow-md  bg-white w-[146px] mt-20 pt-5 pb-4 px-5 rounded-[64px] border-solid border-zinc-600 max-md:pl-px max-md:pb-2.5 cursor-pointer hover:font-bold "
        >
          {!show ? "Read the blogs" : "Close the blogs"}
        </div>
      </div>
    </div>
  );
};

export default Articles;
