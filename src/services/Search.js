import DataProvider from '@/services/DataProvider';
import apiUrl from '@/utils/apiUrl';

export default class Search {
  static async typeahead(term) {
    const result = await DataProvider.get(apiUrl('stopstypeahead', term));
    return result.data;
  }
}
