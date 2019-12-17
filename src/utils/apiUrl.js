const apiEndpoints = {
  // searches
  stopstypeahead: term => `${process.env.VUE_APP_API_URL}/stops/typeahead/${term}`,
};

/**
 * Helper class to get Url's for all API calls
 * {@link http://pragmatic-backbone.com/models-collections-and-data}
 * @author  {@link http://kartoteket.as/team/bard.html Bård Røtzer}
 * @param {String} type       - the type of method to get
 * @param {Mixed}  optional   - All other parameters, just passed on
 */
export default function(type) {
  /* eslint-disable no-undef */
  return apiEndpoints[type] ? apiEndpoints[type].apply(this, [].slice.call(arguments, 1)) : undefined;
};
