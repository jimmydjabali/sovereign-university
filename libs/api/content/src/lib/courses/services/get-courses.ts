import { Dependencies } from '../../dependencies';
import { getProfessorsQuery } from '../../professors/queries';
import { getCoursesQuery } from '../queries';

export const createGetCourses =
  (dependencies: Dependencies) => async (language?: string) => {
    const { postgres } = dependencies;

    const courses = await postgres.exec(getCoursesQuery(language));

    const professors = await postgres.exec(
      getProfessorsQuery({
        contributorIds: courses.flatMap((course) => course.professors),
        language,
      }),
    );

    return courses.map((course) => ({
      ...course,
      professors: professors.filter((professor) =>
        course.professors.includes(professor.contributor_id),
      ),
    }));
  };
