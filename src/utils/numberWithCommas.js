/** Insert decimal thousand separator
 * @function
 * @param { Number } day score
 * @return { String }
 * */
export default function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
