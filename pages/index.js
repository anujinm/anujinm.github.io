import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import avatar from '../public/ai-avatar.png'
import faithlife from '../public/faithlife.png'
import olive from '../public/olive.jpg'
import logos from '../public/logos.png'
import codeu from '../public/codeu.png'
import ffour from '../public/14four-logo.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anujin Munkhbat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-beige lg:p-10 md:p-20 lg:p-30 dark:bg-black-blue">
       <div class="bg-white md:p-10 shadow-xl drop-shadow-2xl w-fit lg:rounded-2xl sm:rounded-none md:my-10">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 class="text-xl font-burtons collapse md:visible">DevelopedByAnu</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl text-dark-purple"/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-raspberry to-red text-white px-4 py-2 rounded-md ml-8 mr-3" href="./Resume.pdf" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div class="grid align-middle lg:grid-cols-2 gap-10 md:grid-cols-2 grid-cols-1">
            <div class="align-middle self-center">
              <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-red dark:text-raspberry font-medium md:text-5xl">Anujin Munkhbat</h2>
                <h3 className="text-2xl py-2 text-gray md:text-sm">Developer | Designer | Entrepreneur</h3>
                <p className="text-md py-5 leading-8 text-gray md:text-xl max-w-xl mx-auto">Software Engineer with a passion to design and build meaningful products that have a positive impact.</p>
              </div>
              <div className="text-3xl flex justify-center gap-10 py-0 text-light-blue">
                <AiFillGithub/>
                <AiFillLinkedin/>
              </div>
            </div>
              <div className="mx-auto bg-gradient-to-b from-beige rounded-full">
                <Image alt="" src={avatar} class="object-contain lg:w-fit lg:h-fit lg:pb-4 md:w-fit md:h-fit md:pt-6 h-64 w-64"/>
              </div>
          </div>
        </section>
       
        {/* Second Page */}

        <section class="md:my-10 lg:w-fit bg-beige dark:bg-black-blue rounded-2xl shadow-lg hover:drop-shadow-2xl">
          <div class="md:flex-row md:block lg:flex lg:justify-between lg:items-start lg:py-7">
            <div class="sticky top-0 p-4 md:justify-center md:flex">
              <h1 className="text-5xl font-bold py-20 pl-8 flex justify-center dark:text-white">My Professional Journey</h1>
            </div>
            <div className="flex-grow p-4 md:py-0">
              <div className="sticky">
                {/* cool graph of my timeline */}

                <div className="ml-0 md:ml-6 lg:ml-0 sticky">
                  <div className="relative py-10 px-5 h-full">
                    <div className="border-rosy dark:border-red absolute h-96/100 lg:right-1/2 right-4/5 border-2 border-solid text-rosy rounded-sm"></div>
                    <div class="border-rosy dark:border-red absolute h-96/100 lg:left-1/2 left-1/5 border-2 border-solid text-rosy rounded-sm"> </div>
                    
                    {/* First left item */}
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                      <div class="timeline-item-buffer"></div>
                      <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                        <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Software Engineer ll</h4>
                        <p class="text-gray-purple dark:text-light-blue text-md">Faithlife, Logos Desktop Team</p>
                        <p class="mb-3 text-base text-red dark:text-red">March 2020 - Current</p>

                        <div class="mt-1 text-sm md:text-base text-gray dark:text-white">
                            <ul class="list-none">
                              <li class="py-1">Led the development of a major feature for the latest release of the Logos app, which was highly valued by customers and contributed to a record-breaking increase in profits.</li>
                              <li class="py-1">Maintained and implemented software features on multiple platforms, including macOS, Windows, and the web, ensuring seamless user experience and functionality.</li>
                              <li class="py-1">Strengthened team collaboration and improved project outcomes through effective leadership skills developed by mentoring interns and leading projects.</li>
                            </ul>
                          <p class="italic font-semibold my-1">C#, .NET, WPF, Objective-C, JavaScript, TypeScript, Azure, MySQL</p>
                        </div>
                      </div>
                      <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                        <Image class="lg:h-8 lg:w-8 h-6 w-6" src={logos}/>
                      </div>
                    </div>

                    {/* Second right item */}
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="timeline-item-buffer"></div>
                      <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-right-lg">
                        <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Software Engineering Intern</h4>
                        <p class="text-gray-purple dark:text-light-blue text-md">Faithlife, Faithlife.com Team</p>
                        <p class="mb-3 text-base text-red dark:text-red">Summer 2019</p>
                        <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                          <ul>
                            <li class="py-1">Contributed to building and maintaining the company&apos;s flagship social web platform as a member of the Faithlife.com team, resulting in increased user engagement and retention. </li>
                            <li class="py-1">Spearheaded the integration of a new dashboard feature that streamlined access to multiple internal products.</li>
                          </ul>
                          <p class="italic font-semibold my-1">React, JavaScript, TypeScript</p>
                        </div>
                      </div>
                      <div class="timeline-img-container  md:timeline-img-container-md lg:timeline-img-container-lg">
                        <Image class="lg:h-8 lg:w-8 h-6 w-6" src={faithlife} />
                      </div>
                    </div>

                    {/* Third left item */}
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                      <div class="timeline-item-buffer"></div>
                      <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                        <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">iOS Development Intern</h4>
                        <p class="text-gray-purple dark:text-light-blue text-md">Olive Tree Bible Software</p>
                        <p class="mb-3 text-base text-red dark:text-red">Sept 2018 - May 2019</p>
                        <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                          <p>Integrated new features into the app such as Siri Shortcuts, Vision Accessibility support, and ML model that leverages Natural Language Processing</p>
                          <p class="italic font-semibold my-1">Objective-C, ML</p>
                        </div>
                      </div>
                      <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                        <Image class="lg:h-8 lg:w-8 h-6 w-6" src={olive}/>
                      </div>
                    </div>

                    {/* Fourth right item */}
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                      <div class="timeline-item-buffer"></div>
                      <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-right-lg">
                        
                        <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Web Development Intern</h4>
                        <p class="text-gray-purple dark:text-light-blue text-md">14Four</p>
                        <p class="mb-3 text-base text-red dark:text-red">May - Aug 2018</p>
                        <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                          <ul>
                            <li class="py-1">Learned and applied new skills in the internship project including creating a web app for cooking recipes and measurement conversions.</li>
                            <li class="py-1">Contributed to various client projects such as websites and banners upon request</li>
                          </ul>
                          <p class="italic font-semibold my-1">VueJS, JavaScript, NodeJS, MySQL, AWS</p>
                        </div>
                      </div>
                      <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                        <Image class="lg:h-8 lg:w-8 h-6 w-6" src={ffour} />
                      </div>
                    </div>

                    {/* Fifth left item */}
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline lg:left-timeline">
                      <div class="timeline-item-buffer"></div>
                      <div class="timeline-item-content md:timeline-item-content-md lg:timeline-item-content-left-lg">
                        <h4 class="mb-3 font-bold text-lg md:text-2xl dark:text-white">Google CodeU Program Alumna</h4>
                        <p class="text-gray-purple dark:text-light-blue text-md">Google Developers</p>
                        <p class="mb-3 text-base text-red dark:text-red">Feb - May 2018</p>
                        <div class="mt-1 text-sm md:text-base leading-snug text-gray dark:text-white">
                          <ul>
                            <li class="py-1">Collaborated with a team of 4 students and a Google Software Engineer as a mentor.</li>
                            <li class="py-1">Developed a chat web application for CS college students. Integrated user profile page and served as a UI Lead</li>
                          </ul>
                          <p class="italic font-semibold my-1">Java, Google Cloud Platform</p>
                        </div>
                    </div>
                      <div class="timeline-img-container md:timeline-img-container-md lg:timeline-img-container-lg">
                        <Image class="lg:h-8 lg:w-8 h-6 w-6" src={codeu} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <div class="border-t flex justify-center my-10 text-gray">
            <p class="py-3 font-thin">Copyright 2023. Made by Anujin Munkhbat</p>
          </div>
        </div>
      </main>
    </div>
  );
}
