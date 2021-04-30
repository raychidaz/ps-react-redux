/* action creators 
 - MUST have a TYPE, payload is optional 
 */
import * as types from './actionTypes';

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
