import { IStopsSmall } from '@/types/IStops';
import DataProvider from '@/services/DataProvider';
import ApiUrl from '@/utils/ApiUrl';
import { AxiosResponse } from 'axios';

export default class Search {
  static async typeahead(term: string): Promise<IStopsSmall> {
    const result: AxiosResponse = await DataProvider.get(ApiUrl.stopstypeahead(term));
    return result.data  as IStopsSmall;
  }
}