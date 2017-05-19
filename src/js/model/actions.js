require('isomorphic-fetch');

const FETCH_DESIRES_SUCCESS = 'fetch_desires_success';
const fetchDesiresSuccess = function(desires) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_DESIRES_SUCCESS,
    desires
  }
}

exports.FETCH_DESIRES_SUCCESS = FETCH_DESIRES_SUCCESS;
exports.fetchDesiresSuccess = fetchDesiresSuccess;



const FETCH_DESIRES_ERROR = 'fetch_desires_error';
const fetchDesiresError = function(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_DESIRES_ERROR,
    error
  }
}

exports.FETCH_DESIRES_ERROR = FETCH_DESIRES_ERROR;
exports.fetchDesiresError = fetchDesiresError;


const fetchDesires = () => {
  console.log('fetchDesires');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/desires`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((desires) => (
      dispatch(
        fetchDesiresSuccess(desires)
      )
    )).catch((error) => (
      dispatch(
        fetchDesiresError(error)
      )
    ))
  )
}

exports.fetchDesires = fetchDesires;




























const FETCH_PRESETS_SUCCESS = 'fetch_presets_success';
const fetchPresetsSuccess = function(presets) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PRESETS_SUCCESS,
    presets
  }
}

exports.FETCH_PRESETS_SUCCESS = FETCH_PRESETS_SUCCESS;
exports.fetchPresetsSuccess = fetchPresetsSuccess;



const FETCH_PRESETS_ERROR = 'fetch_presets_error';
const fetchPresetsError = function(error) {
  console.log('fetchPresetsError', error);
  return {
    type: FETCH_PRESETS_ERROR,
    error
  }
}

exports.FETCH_PRESETS_ERROR = FETCH_PRESETS_ERROR;
exports.fetchPresetsError = fetchPresetsError;


const fetchPresets = () => {
  console.log('fetchPresets');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/presets`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((presets) => (
      dispatch(
        fetchPresetsSuccess(presets)
      )
    )).catch((error) => (
      dispatch(
        fetchPresetsError(error)
      )
    ))
  )
}

exports.fetchPresets = fetchPresets;




















const FETCH_PROVIDERS_SUCCESS = 'fetch_providers_success';
const fetchProvidersSuccess = function(providers) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PROVIDERS_SUCCESS,
    providers
  }
}

exports.FETCH_PROVIDERS_SUCCESS = FETCH_PROVIDERS_SUCCESS;
exports.fetchProvidersSuccess = fetchProvidersSuccess;



const FETCH_PROVIDERS_ERROR = 'fetch_providers_error';
const fetchProvidersError = function(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_PROVIDERS_ERROR,
    error
  }
}

exports.FETCH_PROVIDERS_ERROR = FETCH_PROVIDERS_ERROR;
exports.fetchProvidersError = fetchProvidersError;


const fetchProviders = () => {
  console.log('fetchPresets');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/providers`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((providers) => (
      dispatch(
        fetchProvidersSuccess(providers)
      )
    )).catch((error) => (
      dispatch(
        fetchProvidersError(error)
      )
    ))
  )
}

exports.fetchProviders = fetchProviders;


























const FETCH_CATEGORIES_SUCCESS = 'fetch_categories_success';
const fetchCategoriesSuccess = function(categories) {
  console.log('fetchCategoriesSuccess', categories);
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

exports.FETCH_CATEGORIES_SUCCESS = FETCH_CATEGORIES_SUCCESS;
exports.fetchCategoriesSuccess = fetchCategoriesSuccess;



const FETCH_CATEGORIES_ERROR = 'fetch_categories_error';
const fetchCategoriesError = function(error) {
  //console.log('DELETE_MEDIA_ITEMS_SUCCESS', contents);
  return {
    type: FETCH_CATEGORIES_ERROR,
    error
  }
}

exports.FETCH_CATEGORIES_ERROR = FETCH_CATEGORIES_ERROR;
exports.fetchCategoriesError = fetchCategoriesError;


const fetchCategories = () => {
  console.log('fetchCategories');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/categories`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      console.log(response);
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response;
        console.error(error);
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((categories) => (
      dispatch(
        fetchCategoriesSuccess(categories)
      )
    )).catch((error) => (
      dispatch(
        fetchCategoriesError(error)
      )
    ))
  )
}

exports.fetchCategories = fetchCategories;


















const FETCH_EXTRAS_SUCCESS = 'fetch_extras_success';
const fetchExtrasSuccess = function(extras) {
  console.log('fetchExtrasSuccess', extras);
  return {
    type: FETCH_EXTRAS_SUCCESS,
    extras
  }
}

exports.FETCH_EXTRAS_SUCCESS = FETCH_EXTRAS_SUCCESS;
exports.fetchExtrasSuccess = fetchExtrasSuccess;



const FETCH_EXTRAS_ERROR = 'fetch_extras_error';
const fetchExtrasError = function(error) {
  console.log('fetchExtrasError', error);
  return {
    type: FETCH_EXTRAS_ERROR,
    error
  }
}

exports.FETCH_EXTRAS_ERROR = FETCH_EXTRAS_ERROR;
exports.fetchExtrasError = fetchExtrasError;


const fetchExtras = (provider) => {
  console.log('fetchExtras');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/${provider}/extras`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      console.log(response);
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response;
        console.error(error);
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((extras) => (
      dispatch(
        fetchExtrasSuccess(extras)
      )
    )).catch((error) => (
      dispatch(
        fetchExtrasError(error)
      )
    ))
  )
}

exports.fetchExtras = fetchExtras;














const FETCH_EXEMPTIONS_SUCCESS = 'fetch_exemptions_success';
const fetchExemptionsSuccess = function(exemptions) {
  return {
    type: FETCH_EXEMPTIONS_SUCCESS,
    exemptions
  }
}

exports.FETCH_EXEMPTIONS_SUCCESS = FETCH_EXEMPTIONS_SUCCESS;
exports.fetchExemptionsSuccess = fetchExemptionsSuccess;



const FETCH_EXEMPTIONS_ERROR = 'fetch_exemptions_error';
const fetchExemptionsError = function(error) {
  return {
    type: FETCH_EXEMPTIONS_ERROR,
    error
  }
}

exports.FETCH_EXEMPTIONS_ERROR = FETCH_EXEMPTIONS_ERROR;
exports.fetchExemptionsError = fetchExemptionsError;


const fetchExemptions = (provider) => {
  console.log('fetchExtras');
  /*for(var pair of formData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }*/
  return (dispatch) => (
    fetch(`/api/${provider}/extras/exemptions`, {
      method: 'GET',
      headers: Object.assign({}, {
        'Accept': 'application/json',
        //'Content-Type': 'multipart/form-data'
      }, {})
    }).then((response) => {
      console.log(response);
      if(response.state < 200 || response.state >= 300) {
        var error = new Error(response.statusText)
        error.response = response;
        console.error(error);
        throw error;
      }
      return response;
    }).then((response) => (
      response.json()
    )).then((exemptions) => (
      dispatch(
        fetchExemptionsSuccess(exemptions)
      )
    )).catch((error) => (
      dispatch(
        fetchExemptionsError(error)
      )
    ))
  )
}

exports.fetchExemptions = fetchExemptions;
