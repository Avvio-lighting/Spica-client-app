import Project from '@/components/Projects/Project/Project';
import { getProject } from '@/lib/api/projects';
import { APP_BASE_URL } from '@/lib/constants';
export async function generateMetadata({ params }) {
  const id = params.id;
  const project = await getProject(id);
  return {
    title: project.title[params.locale],
    keywords: [
      'Solar powered lighting luminaires',
      'Outdoor solar street lighting',
      'Solar landscape lighting solutions',
      'Solar integrated poles',
      'High-quality solar lighting products',
      'Industrial design solar lights',
      'Innovative solar lighting solutions',
      'Concise design solar luminaires',
      'Superior quality solar lights',
      'Custom solar lighting designs',
      'Projects',
      'Work',
      'China',
      'USA',
      'KSA',
      'Mexico',
      'Testimonials',
      project.title[params.locale],
    ],
    authors: [{ name: 'Spica' }],
    openGraph: {
      title:
        'Spica Solar Lighting: High-Quality Solar Powered Lighting Luminaires',
      description:
        "Discover Spica Solar Lighting's high-quality solar powered lighting luminaires. We specialize in outdoor solar street lighting, solar landscape lighting solutions, and solar integrated poles, known for superior quality and innovative design.",
      url: `${APP_BASE_URL}/projects/${id}`,
      siteName: 'Spica',
      images: [
        {
          url: `${APP_BASE_URL}/blogs/blog.png`,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: project.title[params.locale],
      description: !project.description
        ? 'descreption'
        : project.description[params.locale],
      creator: '@spica',
      images: [`${APP_BASE_URL}/blogs/blog.png`],
    },
  };
}

const Projects = ({ params }) => {
  const locale = params.locale;
  return (
    <div>
      <Project id={params.id} locale={locale} />
    </div>
  );
};

export default Projects;
