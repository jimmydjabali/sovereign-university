import { sql } from '@sovereign-university/database';
import { JoinedCourse } from '@sovereign-university/types';

export const getProfessorCoursesQuery = ({
  id,
  contributorId,
  language,
}: {
  language?: string;
} & (
  | {
      id?: undefined;
      contributorId: string;
    }
  | {
      id: number;
      contributorId?: undefined;
    }
)) => {
  const whereClauses = [];

  if (id !== undefined) {
    whereClauses.push(sql`p.id = ${id}`);
  }
  if (contributorId !== undefined) {
    whereClauses.push(sql`p.contributor_id = ${contributorId}`);
  }
  if (language !== undefined) {
    whereClauses.push(sql`cl.language = ${language}`);
  }
  const whereStatement = sql`WHERE ${whereClauses.reduce(
    (acc, clause) => sql`${acc} AND ${clause}`,
  )}`;

  return sql<JoinedCourse[]>`
    SELECT 
      c.id, 
      cl.language, 
      c.level, 
      c.hours, 
      cl.name, 
      cl.goal,
      cl.objectives, 
      cl.raw_description, 
      c.last_updated, 
      c.last_commit,
      COALESCE(cp_agg.professors, ARRAY[]::varchar[20]) as professors
    FROM content.professors p

    -- Join to get the course_professors
    JOIN content.course_professors cp ON p.contributor_id = cp.contributor_id

    -- Join to get the actual course details
    JOIN content.courses c ON cp.course_id = c.id

    -- Join to get the localized course details
    JOIN content.courses_localized cl ON c.id = cl.course_id

    -- Lateral join for aggregating professors
    LEFT JOIN LATERAL (
      SELECT ARRAY_AGG(cp.contributor_id) as professors
      FROM content.course_professors cp
      WHERE cp.course_id = c.id
    ) AS cp_agg ON TRUE

    ${whereStatement}

    GROUP BY 
      c.id, 
      cl.language, 
      c.level, 
      c.hours, 
      cl.name, 
      cl.goal,
      cl.objectives, 
      cl.raw_description, 
      c.last_updated, 
      c.last_commit,
      cp_agg.professors
  `;
};
