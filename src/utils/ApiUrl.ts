export default class ApiUrl {
  static stopstypeahead(term: string) {
    return `${process.env.VUE_APP_API_URL}/stops/typeahead/${term}`
  }
}
