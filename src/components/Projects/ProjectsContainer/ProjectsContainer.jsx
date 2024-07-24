'use client';
import RightAlignedProject from './RightAlignedProject/RightAlignedProject';
import LeftAlignedProject from './LeftAlignedProject/LeftAlignedProject';
import { useTranslations } from 'next-intl';
import { useProjects } from './hooks';

const ProjectsContainer = ({ locale }) => {
  const l = useTranslations('categories');
  const { projects, canFetchMore, handleLoadMore } = useProjects();

  return (
    <div className={style.container}>
      {projects.map((proj, index) => {
        return index % 2 == 0 ? (
          <LeftAlignedProject project={proj} key={index} locale={locale} />
        ) : (
          <RightAlignedProject project={proj} key={index} locale={locale} />
        );
      })}
      {canFetchMore && (
        <button
          onClick={handleLoadMore}
          disabled={!canFetchMore}
          className={style.button}
        >
          {l('show-more')}
        </button>
      )}
    </div>
  );
};

export default ProjectsContainer;

//* Style
const style = {
  button: `button mx-auto my-5 disabled:bg-honeydew disabled:text-dolphine`,
  container: `mt-10`,
};
