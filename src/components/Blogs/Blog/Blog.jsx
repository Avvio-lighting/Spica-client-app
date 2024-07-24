import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlog } from '@/lib/api/blogs';
import { API_BASE_URL } from '@/lib/constants';
import rgbDataURL from '@/util/rgbDataUrl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import ReadingDuration from '@/components/Shared/Blog/ReadingDuration/ReadingDuration';
import AnimatedFromBottom from '@/components/Shared/Animated/AnimatedFromBottom';
import Share from './Share/Share';

const convertToMarkdown = (text) => {
  text = text.replace(/\s+/g, ' ');
  text = text.replace(/(\d+)\. (.+?)(?=\d+\.|$)/g, '\n$1. $2\n');
  text = text.replace(/([*+\-]) (.+?)(?=\s[*+\-]|$)/g, '\n$1 $2\n');
  text = text.replace(
    /(\d+)\.\s(.*?)(\.\s)/g,
    (_, num, heading) => `# ${heading}\n`
  );
  text = text.replace(/^\s*[*+\-]\s(.+)$/gm, '- $1');
  text = text.replace(/\n\s*\n/g, '\n\n');
  text = text.trim();
  return { p1: text.split('[[[]]]')[0], p2: text.split('[[[]]]')[1] };
};

const article = `
1. Solar Energy: Harnessing the Power of the Sun.
   Solar energy, the radiant light and heat from the sun, has been harnessed by humans since ancient times using a range of ever-evolving technologies. Today, it is a key player in the global shift towards sustainable and renewable energy sources. Solar energy is abundant, inexhaustible, and clean, making it an ideal alternative to fossil fuels. This article delves into the various aspects of solar energy, including its history, technologies, benefits, and challenges.
2. A Brief History of Solar Energy.
   The use of solar energy dates back to ancient civilizations. The Greeks, Romans, and Chinese designed their homes and buildings to maximize the sun's heat during winter. The concept of using the sun's energy for practical applications began to take shape in the 19th century when French scientist Edmond Becquerel discovered the photovoltaic effect, the principle behind solar cells. The 20th century saw significant advancements in solar technology. In 1954, Bell Labs developed the first practical photovoltaic (PV) cell, which could convert sunlight into electricity. The 1970s energy crisis spurred further research and development in solar technologies, leading to more efficient and affordable solar panels.
3. Solar Technologies.
   Solar energy can be harnessed through two main technologies: photovoltaic (PV) systems and solar thermal systems.
   - Photovoltaic (PV) Systems
     PV systems convert sunlight directly into electricity using solar cells made from semiconductor materials, typically silicon. When sunlight strikes the solar cells, it knocks electrons loose from their atoms, generating a flow of electricity. PV systems are versatile and can be used in a wide range of applications, from small-scale systems for homes to large solar farms that supply power to the grid.
   - Solar Thermal Systems
     Solar thermal systems use the sun's heat to produce thermal energy, which can be used directly for heating or to generate electricity. There are several types of solar thermal systems:
     - Solar Water Heaters: These systems use solar collectors to heat water for domestic use.
     - Solar Space Heating: These systems use the sun's heat to warm indoor spaces.
     - Concentrated Solar Power (CSP): CSP systems use mirrors or lenses to concentrate sunlight onto a small area to produce high temperatures. This heat is then used to generate electricity through a conventional power plant.
4. Benefits of Solar Energy.
   - Renewable and Sustainable
     Solar energy is a renewable resource, meaning it won't run out as long as the sun continues to shine. Unlike fossil fuels, which are finite and contribute to environmental degradation, solar energy is sustainable and environmentally friendly.
   - Reduces Greenhouse Gas Emissions
     Using solar energy reduces the need for fossil fuels, which are major sources of greenhouse gas emissions. By decreasing our reliance on fossil fuels, solar energy helps mitigate climate change and reduces air pollution.
   - Low Operating Costs
     Once installed, solar energy systems have low operating and maintenance costs. Solar panels typically have a lifespan of 25-30 years, during which they require minimal maintenance.
   - Energy Independence
     Solar energy provides an opportunity for energy independence. By generating their own electricity, individuals, businesses, and communities can reduce their reliance on external energy sources and increase energy security.
   - Job Creation
     The solar industry has been a significant source of job creation. From manufacturing and installation to maintenance and research, the growth of solar energy has created numerous employment opportunities worldwide.
[[[]]]
5. Challenges of Solar Energy.
   - Intermittency
     One of the primary challenges of solar energy is its intermittency. Solar power generation is dependent on sunlight, making it unavailable at night and less effective on cloudy days. This variability can be mitigated with energy storage systems, such as batteries, which store excess energy for use when sunlight is not available.
   - High Initial Costs
     The initial cost of installing solar energy systems can be high, which can be a barrier for some individuals and businesses. However, costs have been decreasing steadily over the years, and various incentives and financing options are available to help offset these costs.
   - Space Requirements
     Large-scale solar installations require significant amounts of space, which can be a limitation in densely populated areas. Innovative solutions, such as rooftop solar panels and solar farms on unused land, can help address this issue.
   - Energy Conversion Efficiency
     While solar technology has made great strides, the efficiency of converting sunlight into electricity is still relatively low compared to other energy sources. Ongoing research and development aim to improve the efficiency and cost-effectiveness of solar cells.
6. The Future of Solar Energy.
   The future of solar energy is bright. Advances in technology and reductions in cost are making solar power more accessible and efficient. Innovations such as perovskite solar cells, which promise higher efficiencies and lower production costs, and solar-integrated building materials are set to revolutionize the industry. Governments and organizations worldwide are recognizing the importance of solar energy in achieving sustainable development goals and combating climate change. Investments in research, infrastructure, and policy support are driving the growth of the solar sector.
In conclusion, solar energy is a powerful and versatile resource that offers numerous benefits for the environment, economy, and society. While challenges remain, ongoing advancements and supportive policies are paving the way for a future powered by the sun. As we continue to harness the potential of solar energy, we move closer to a cleaner, more sustainable world.

`;

const Blog = async ({ children, id, locale }) => {
  const blog = await getBlog(id);
  const t = await getTranslations('blog');
  const { p1, p2 } = convertToMarkdown(article);
  return (
    <main className={style.main}>
      <div className={style.background}>
        <Image
          src='/lines.svg'
          alt='lines'
          fill
          style={{
            objectFit: 'contain',
          }}
          placeholder='blur'
          blurDataURL={rgbDataURL(237, 255, 238)}
        />
      </div>
      <article className={style.article}>
        <div className={style.tagsContainer}>
          <div className={style.tag}>{t('tags.1')}</div>
          <div className={style.tag}>{t('tags.2')}</div>
          <div className={style.tag}>{t('tags.3')}</div>
        </div>

        <h1 className={style.heading}>{blog.title[locale]}</h1>
        <div className={style.durationContainer}>
          <ReadingDuration duration={blog.readingDuration} />
        </div>
        <div className={style.imageContainer}>
          <Image
            src={API_BASE_URL + blog.mainImage}
            alt={blog.title[locale]}
            fill
            style={{
              objectFit: 'cover',
            }}
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
            className='rounded-lg'
          />
        </div>
        <Share id={id} title={blog.title['en']} />
        {/* Render Markdown */}
        <AnimatedFromBottom>
          <div className={style.paragraph}>
            <ReactMarkdown className='prose w-full'>{p1}</ReactMarkdown>
          </div>
        </AnimatedFromBottom>

        <div className={style.imageContainer}>
          <Image
            src={'/blogs/blog.png'}
            alt={'static'}
            fill
            style={{
              objectFit: 'cover',
            }}
            placeholder='blur'
            blurDataURL={rgbDataURL(237, 255, 238)}
            className='rounded-lg'
          />
        </div>

        {children}
        <AnimatedFromBottom>
          <div className={style.paragraph}>
            <ReactMarkdown className='prose w-full'>{p2}</ReactMarkdown>
          </div>
        </AnimatedFromBottom>
      </article>
    </main>
  );
};

export default Blog;

//* Style

const style = {
  main: `relative`,
  background: `absolute -z-10 mb-5 h-[540px] w-[100%] bg-honeydew`,
  article: `z-10 mx-auto flex flex-col items-center overflow-hidden p-5 pt-20 md:w-[90%]`,
  heading: `m-10 text-wrap text-center text-6xl font-semibold text-charcoal`,
  tagsContainer: `mt-3 z-11 flex justify-center items-center h-fit gap-2`,
  tag: ` flex h-8 w-fit items-center justify-center rounded-[200px] border-[1px] border-solid border-charcoal px-2 py-1 bg-white text-xs font-semibold`,
  durationContainer: `mb-3 font-semibold`,
  imageContainer: `relative h-[250px] w-[90%] md:h-[400px] md:w-[60%]`,
  paragraph: `my-5 font-semibold`,
};
