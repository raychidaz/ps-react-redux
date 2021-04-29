/* action creators 
 - MUST have a TYPE, payload is optional 
 */

export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course };
}
