const setPage = async ({commit, state}, payload) => {
    let element = payload.page
    if (!element)
        element = (await axios.get(state.baseURL + '/ajax/' + payload.name)).data

    commit('SET_PAGE', {name: payload.name, element})
}

const setInner = async ({commit, state}, page) => {
    const inner = (await axios.get(state.baseURL + '/ajax/page/' + page)).data
    commit('SET_INNER', {inner})
}

const delMenu = async ({commit, state}, item) => {
    commit('DEL_MENU', item);
}

const setTemperature = async ({commit, state}, page) => {
    const temperature = (await axios.get(state.baseURL + '/ajax/temperature')).data

    commit('SET_TEMPERATURE', {temperature})
}

const setLastBreadcrumb = async ({ commit, state }, payload) => {

    state.breadcrumbs[state.breadcrumbs.length - 1].name = payload[0];
    state.breadcrumbs[state.breadcrumbs.length - 1].url = null;
}

const setContraste = async ({commit, state}, value) => {
    console.log('entrou na action CONTRASTE', value)
    commit("SET_CONTRASTE", value);
    // state.contraste = value;
}

const setFirstNews = async ({commit}, news) => {
    commit('SET_NEWS', {news})
}

const setConfigs = async ({commit, state}, payload) => {
    let list
    if (payload)
        list = payload
    else
        list = (await axios.get(state.baseURL + '/ajax/configs')).data
    commit('SET_CONFIGS', {list})
}


const setMenus = async ({commit, state}, payload) => {
    let list

    if (payload)
        list = payload
    else
        list = (await axios.get(state.baseURL + '/ajax/menus')).data

    commit('SET_MENUS', {list})
}

const setSearch = async ({commit, state}, payload) => {

    state.search = null;

    let list = (await axios.get(state.baseURL + '/ajax/search/' + payload.key)).data

    console.log('list', list)
    commit('SET_SEARCH', list)
}

const setBanner = async ({commit, state}, banner) => {
    let list

    if (typeof banner === 'String')
        list = (await axios.get(state.baseURL + '/ajax/banner/' + banner)).data
    else
        list = banner

    commit('SET_BANNER', {list})
}

const setGalleries = async ({commit, state}, payload) => {
    let element = payload.gallery
    if (!element)
        element = (await axios.get(state.baseURL + '/ajax/gallery/' + payload.name)).data

    commit('SET_GALLERIES', {name: payload.name, element})
}

const setPaes = async ({commit, state}, paeName) => {

    const pae = (await axios.get(state.baseURL + '/ajax/pae/' + paeName)).data
    commit('SET_PAES', {pae})
}

const setImage = async ({commit, state}, payload) => {

    var result = (await axios.post(state.baseURL + '/ajax/image', {
        'name': payload.name,
        'path': payload.path,
        'width': payload.width,
        'height': payload.height,
        'size': payload.size,

    })).data


    if (result != true)
        window.location.reload()


}

const setNews = async ({commit, state}, payload) => {
    let news
    if (payload.data) {
        news = payload
    }
    else
        news = (await axios.get(state.baseURL
            + '/ajax/news?page=' + payload.page
            + '&per-page=' + payload.perPage
            + '&department=' + payload.department
        )).data
    commit('SET_NEWS', {news})
}

const setContests = async ({commit, state}, payload) => {
    state.contests = {};
    state.candidates = null;
    state.positions = null;

    let contests

    if (payload.data) {
        contests = payload
    }
    else {
        contests = (await axios.get(state.baseURL
            + '/ajax/contests?page=' + payload.page
            + '&per-page=' + payload.perPage
            + '&year=' + payload.year
        )).data
    }


    commit('SET_CONTESTS', {contests})
}

const setPositions = async ({commit, state}, payload) => {

    state.positions = {};
    state.candidates = null;

    let positions
    if (payload.data) {
        positions = payload
    }
    else {
        positions = (await axios.get(state.baseURL
            + '/ajax/positions?page=' + payload.page
            + '&per-page=' + payload.perPage
            + '&contest=' + payload.contest
        )).data
    }


    commit('SET_POSITIONS', {positions})
}


const setCandidates = async ({commit, state}, payload) => {
    console.log('payload.page', payload.page)
    if (!payload.page) {
        state.candidates = {};
    }

    let name = payload.name || '';

    let candidates
    if (payload.data) {
        candidates = payload
    }
    else {
        candidates = (await axios.get(state.baseURL
            + '/ajax/candidates?page=' + payload.page
            + '&per-page=' + payload.perPage
            + '&position=' + payload.position
            + '&name=' + name
        )).data
    }

    commit('SET_CANDIDATES', {candidates})
}

const setBindCategories = async ({commit, state}, payload) => {

    let bindCategory = (await axios.get(state.baseURL
        + '/ajax/bind-categories/' + payload.id
        + '?page=' + payload.page
        + '&per-page=' + payload.perPage
        + '&department=' + payload.department
        + '&year=' + payload.year
        + '&status=' + payload.status
    )).data
    // }

    return bindCategory
    console.dir(bindCategory)
    commit('SET_TO_STATE', {label: bindCategory.id, state: 'bindCategories', payload: bindCategory})
}


const setDepartments = async ({commit, state}, payload) => {

    let departments
    if (payload) {
        departments = payload
    }

    commit('SET_DEPARTMENTS', {departments})
}


const setEvents = async ({commit, state}, payload) => {
    let events
    if (payload.data) {
        events = payload
        console.log('inside if payload.data ')
    } else
        events = (await axios.get(state.baseURL
            + '/ajax/events?page=' + payload.page
            + '&per-page=' + payload.perPage
        )).data
    commit('SET_EVENTS', {events})
}

const setSchedules = async ({commit, state}, payload) => {
    state.schedules = null;
    let events;

    if (payload.data) {
        events = payload.data
        console.log('inside if payload.data ')
    } else{
        events = (await axios.get(state.baseURL
            + '/ajax/schedules/' + payload.year
        )).data
    }
    commit('SET_SCHEDULES', {events})
}

const setFilters = async ({commit}, payload) => {
    commit('SET_FILTERS', {payload})
}

const setState = async ({commit, state}, payload) => {
    commit('SET_STORE_STATE', payload)
}

const setToState = async ({commit, state}, payload) => {
    commit('SET_TO_STATE', payload)
}

const setToken = async ({commit, state}, payload) => {
    commit('SET_TOKEN', payload)
}

const setBreadcrumbs = async ({commit, state}, payload) => {
    commit('SET_BREADCRUMBS', payload)
}

const setInnerGalleries = async ({commit, state}, payload) => {


    const gallery = (await axios.get(state.baseURL + '/ajax/inner-gallery/' + payload.name)).data
    commit('SET_INNER_GALLERIES', {name: payload.name, gallery})
}


const setLocation = async ({commit, state}, payload) => {
    console.log("setlocation")
    const all = (await axios.get(state.baseURL + '/ajax/location?type=' + payload.type + '&id=' + payload.id)).data
    let list = null
    if (payload.type === 'country') {
        if (payload.id == 1) {
            list = all;
            commit('SET_STATES', {list})
        }
        else {
            list = all.states
            commit('SET_STATES', {list})
            list = all.cities
            commit('SET_CITIES', {list})

        }
    }
    list = all

    if (payload.type === 'state') {
        commit('SET_CITIES', {list})
    }

    // if (payload.type === 'city') {
    //     commit('SET_NEIGHBORHOODS', { list })
    // }

    // if (payload.type === 'neighborhood'){}
}

const setClearFields = async ({commit, state}, type) => {
    const list = [];

    if (type === 'country') {
        commit('SET_STATES', {list})
        commit('SET_CITIES', {list})
        // commit('SET_NEIGHBORHOODS', { list })
    }

    if (type === 'state') {
        commit('SET_CITIES', {list})
        // commit('SET_NEIGHBORHOODS', { list })

    }

    if (type === 'city') {
        // commit('SET_NEIGHBORHOODS', { list })
    }

    // if (type === 'neighborhood'){}
}


const sendContactForm = async ({commit, state}, payload) => {
    console.log('entrou no action sendContactForm')
    console.log('action: payload ', payload)
    // payload['csrfToken'] = state.token
    var result = (await axios.post(state.baseURL + '/ajax/contact/send', payload)).data
    commit("SET_CONTACTFORM", result.status);
}

const sendNewsLetter = async ({commit,state},payload) => {
    console.log('NA ACTION O PAYLOAD DA SENDNEWSLETTER É: ', payload)
    var result = (await axios.post(state.baseURL + '/ajax/newsletter', payload)).data
    console.log(result);
    commit("SET_NEWSLETTER", result.status);
}

const setNewsLetter = async ({commit, state}) => {

    commit("SET_NEWSLETTER", null);

}

const setContactForm = async ({commit, state}) => {

    commit("SET_CONTACTFORM", null);

}




const setDepartmentList = async ({commit, state},payload) => {
	let url = state.baseURL + '/ajax/department/'+payload.department+'/'+payload.model+'/'+payload.id+'?page='+payload.page;
	if(payload.filter)
		url += '&filter=' + payload.filter

	const element = (await axios.get(url)
		.catch(error => {
			return error.response
		})).data


	commit('SET_ACTION_RESPONSE',{id:payload.actionId, element})
}

export default {
	setPage,
	setInner,
	setConfigs,
	setBanner,
	setGalleries,
	setPaes,
	setImage,
	setNews,
	setEvents,
	setFilters,
	setState,
	setToState,
	setInnerGalleries,
	setTemperature,
	setFirstNews,
	setDepartments,
	setLocation,
	setClearFields,
	sendContactForm,
	setContactForm,
	setToken,
	sendNewsLetter,
	setNewsLetter,
	setMenus,
	setBreadcrumbs,
	setContests,
	setPositions,
	setCandidates,
	setBindCategories,
	setLastBreadcrumb,
	setContraste,
	setSearch,
	setDepartmentList,
    setSchedules,
    delMenu
}