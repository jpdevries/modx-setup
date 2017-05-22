import { combineReducers, createStore } from 'redux';

import actions from './model/actions';

import SetupReducer from './model/reducers';

const Mousetrap = require('mousetrap');

import path from 'path';

const emsp = ' ';
const ensp = ' ';

const removeChildren = function(node) {
  let last;
  while (last = node.lastChild) node.removeChild(last);
};

//import lazyLoadScript from 'lazyLoadScript';

/*
function getJSON(endpoint) {
  return new Promise(function(resolve, reject) {

    var request = new Request(endpoint, {
    	method: 'GET',
    	//mode: 'cors',
    	//redirect: 'follow',
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    });

    fetch(endpoint).then((response) => response.json()).then((json) => {
      resolve(json)
    })
  })
}

getJSON('/api/extras/desires').then((json) => {
  //console.log(json);
});
*/

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = require('./model/store');


// fetch the providers (ex: ["modx.com", "modmore"])
store.dispatch(actions.fetchProviders()).then((action) => {
  Promise.all([ // then get the presets, desires and categories
    store.dispatch(actions.fetchPresets()),
    store.dispatch(actions.fetchDesires()),
    store.dispatch(actions.fetchCategories()),
    store.dispatch(actions.fetchExemptions())
  ]).then(() => {
    const extraPromises = action.providers.map((provider) => ( // then for each provider
      store.dispatch(actions.fetchExtras(provider)) // get the Extras
    ));
    Promise.all(extraPromises).then(() => {
      console.log('extras loaded');
      document.body.classList.remove('no-packages-loaded');
      document.body.classList.add('packages-loaded');
    })
  })
});

document.getElementById('packages-to-install').addEventListener('change', (event) => {
  console.log(event);
  showOrHidePremiumYouveChosen();

  if(event.target.getAttribute('name') !== 'show-package-descriptions') return;

  //console.log('show-package-descriptions', event.target);

  const descriptions = document.getElementById('packages-to-install').querySelectorAll('.extra-description');
  for(let i = 0; i < descriptions.length; i++) {
    const description = descriptions[i];
    if(event.target.checked) {
      description.removeAttribute('hidden');
    } else {
      description.setAttribute('hidden', true);
    }
  }

  const showPackageDescriptionInputs = document.querySelectorAll(`input[name="show-package-descriptions"]:not(#${event.target.getAttribute('id')})`);
  for(let i = 0; i < showPackageDescriptionInputs.length; i++) showPackageDescriptionInputs[i].checked  = event.target.checked;




});

function showOrHidePremiumYouveChosen() {
  const chosenPremium = (() => {
    try {
      return document.getElementById('packages-to-install').querySelectorAll('label[data-price] input:checked').length
    } catch (e) {
      return 0;
    }
  })(),
  youveChosenPremium = document.getElementById('youve-chosen-premium');

  if(chosenPremium) {
    youveChosenPremium.removeAttribute('aria-hidden')
  } else {
    youveChosenPremium.setAttribute('aria-hidden', true)
  }

  setTimeout(() => {
    youveChosenPremium.querySelector('.num-extras').innerHTML = (chosenPremium) ? `${chosenPremium} ` : 'no ';
    youveChosenPremium.querySelector('.premium-packages').innerHTML = `premium package${chosenPremium > 1 ? 's' : ''}`
  }, !chosenPremium ? 500 : 0);

}



const actionTables = document.querySelectorAll('table.action-row');
for(let i = 0; i < actionTables.length; i++) {
  const actionTable = actionTables[i];
  actionTable.addEventListener('click', (event) => {
    if(event.target.getAttribute('name') == 'remove') {
      event.target.closest('tr').remove();
    }
  });

  actionTable.addEventListener('focusin', (event) => {
    if(event.target.matches('tr')) {
      const trs = event.target.closest('tbody').querySelectorAll('tr');
      //console.log('trs', trs);
      for(let i = 0; i < trs.length; i++) {
        const tr = trs[i];
        if(tr !== event.target) tr.classList.remove('focused');
      }
      //console.log('adding focused class', event.target);
      event.target.classList.add('focused');
    }
  });

}


// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => {
  const state = store.getState();
  console.log(state);

  let numExtras = 0;
  Object.keys(state.extras).forEach((provider) => {
    //console.log(state.extras[provider]);
    numExtras += state.extras[provider].length;
  });

  if(!numExtras) {
    //console.log('returning');
    return;
  }

  const managingWrapper = document.getElementById('what-ill-be-managing-fields');
  removeChildren(managingWrapper);

  state.presets.forEach((preset) => {
    managingWrapper.appendChild((() => {
      const div = document.createElement('div');
      div.classList.add('field');

      div.appendChild((() => {
        const label = document.createElement('label');
        label.setAttribute('for', `want-${preset.key}`);

        label.appendChild((() => {
          const input = document.createElement('input');
          input.setAttribute('type', 'radio');
          input.setAttribute('id', `want-${preset.key}`);
          input.setAttribute('name', `i-want`);
          input.dataset.preset = preset.key;
          input.dataset.dependent = (() => {
            try {
              return preset.dependent.map((dep => (`pkg-${dep}`))).join(' ')
            } catch (e) {
              console.error(e);
              return undefined
            }
          })();
          input.checked = preset.checked;

          return input;
        })());

        label.appendChild((() => (
          document.createTextNode(`${ensp}${preset.title}`)
        ))());

        return label;
      })());



      return div;

    })());
  });

  /*
  <div class="field">
      <label for="want-custom-site">
      <input checked type="radio" id="want-custom-site" name="i-want" data-dependent="">&nbsp;Custom Site</label>
  </div>
  */

  const desiresWrapper = document.getElementById('i-would-like-to-desires');
  removeChildren(desiresWrapper);
  state.desires.forEach((desire) => {
    desiresWrapper.appendChild((() => {
      const label = document.createElement('label');
      label.classList.add('field');
      label.setAttribute('for', `i-like-${desire.key}`);

      label.appendChild((() => {
        const input = document.createElement('input');

        input.setAttribute('type', desire.type || 'checkbox');
        input.setAttribute('name', (desire.name) ? `i-like-${desire.name}` : `i-like-${desire.key}`);
        input.setAttribute('id', `i-like-${desire.key}`);
        input.dataset.dependent = desire.dependencies.map((dep) => (`pkg-${dep}`)).join(' ');
        if(desire.default) input.dataset.default = desire.default;

        return input;
      })());

      label.appendChild(document.createTextNode(ensp));
      label.appendChild(document.createTextNode(desire.title));

      return label;
      //<label class="field" for="i-like-versionx"><input type="checkbox" name="i-like-versionx" id="i-like-versionx" data-dependent="pkg-versionx">&ensp;Create versioned backups of my content</label>
    })())
  });

  const showPackageDescriptions = document.getElementById('show-package-descriptions').checked;

  const presets = state.presets;
  /*presets.forEach((preset) => (
    console.log(preset)
  ))*/


  const desires = state.desires;
  //console.log(desires, desires.length);

  const categories = state.categories;
  categories.forEach((category) => {

    const { key, title } = category;
    const extras = filterExtrasByCategory(category.key);

    //const foo = document.getElementById('foo');
    //removeChildren(foo);
    if(document.querySelector(`[data-category="${category.key}"]`)) {
      //console.log('should not recreate ', category.key, extras, document.querySelector(`[data-category="${category.key}"]`).outerHTML);
      addExtrasToCategory(category, extras);
    } else {
      foo.appendChild(
        getCategoryDetail(category, extras)
      );
    }
  });

  function addExtrasToCategory(category, extras) {
  //  console.log('addExtrasToCategory', category, extras);
    const wrapper = document.querySelector(`[data-category="${category.key}"]`);
    extras.forEach((extra) => {
      //console.log(extra);
      if(!wrapper.querySelector(`label[data-pkg-key="${extra.key}"]`)) {
        addExtras(extras, document.querySelector(`[data-category="${category.key}"]`).querySelector('fieldset'));
        /*wrapper.appendChild(
          document.createTextNode('YOLO')
        )*/
      }
    })

    sortIt();
    function sortIt() {
      const fieldset = wrapper.querySelector('fieldset');
      const fields = [...fieldset.querySelectorAll('.field')];

      //console.log(fields);

      const sortedFields = fields.sort((a,b) => {
        if(a.querySelector('input').getAttribute('name') == b.querySelector('input').getAttribute('name')) {
          return (a.querySelector('label').dataset.pkgKey > b.querySelector('label').dataset.pkgKey) ? '1' : '-1';
        }
        return a.querySelector('input').getAttribute('name') > b.querySelector('input').getAttribute('name') ? '1' : '-1';
      });

      console.log(sortedFields);

      for(let i = 0; i < fields.length; i++) {
          fieldset.removeChild(fields[i]);
      }

      for(let i = 0; i < sortedFields.length; i++) {
          fieldset.appendChild(sortedFields[i]);
      }


    }

  }

  function filterExtrasByCategory(category) {
    let extras = [];

    console.log('filterExtrasByCategory', Object.keys(state.extras));

    Object.keys(state.extras).forEach((provider) => {
      const filtered = state.extras[provider].filter((extra) => (
        extra.category == category
      ));
      extras = [...filtered, ...extras];
    });

    return extras;
  }

  function addExtras(extras, appendTo) {
    extras.forEach((extra) => {
      const pkgKey = `pkg-${extra.key}`;
      if(document.getElementById(pkgKey)) return;

      const div = document.createElement('div');
      div.classList.add('field');

      const labelWrapper = document.createElement('div');
      labelWrapper.classList.add('always');
      labelWrapper.classList.add('flexible');
      labelWrapper.classList.add('start');
      const label = document.createElement('label');
      label.setAttribute('aria-label', extra.title);
      label.setAttribute('aria-describedby', `${pkgKey}-description`);
      label.dataset.pkgKey = extra.key;
      if(extra.price) label.dataset.price = extra.price;


      label.setAttribute('for', pkgKey);

      function getExemptionsByExtra(extra) {
        //console.log('getExemptionsByExtra', Object.keys(state.exemptions));

        const returns = [];

        Object.keys(state.exemptions).forEach((exemption) => {
          console.log(exemption, state.exemptions[exemption]);

          const pkgs = state.exemptions[exemption];
          pkgs.forEach((pkg) => {
            if(pkg == extra.key) returns.push(exemption);
          });

        })

        return returns;
      }

      label.appendChild((() => {
        const input = document.createElement('input');
        input.setAttribute('type', extra.type || 'checkbox');
        input.setAttribute('name', (extra.name) ? `pkg-${extra.name}` : pkgKey);
        input.setAttribute('id', pkgKey);
        //input.dataset.preset = 'foo';
        if(extra.default) input.dataset.default = extra.default;

        const pkgExemptions = getExemptionsByExtra(extra).map((exemption) => (`pkg-${exemption}`)).join(' ').trim();
        if(pkgExemptions) input.dataset.pkgExempt = pkgExemptions;

        return input;
      })());

      label.appendChild(document.createTextNode(` ${extra.title}`));

      label.appendChild(document.createTextNode(emsp));




      labelWrapper.appendChild(label);
      labelWrapper.appendChild((() => {
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        if(extra.price) a.setAttribute('aria-describedby', 'premium-extras-trial');
        a.appendChild((() => {
          const small = document.createElement('small');
          small.innerHTML = (extra.price) ? 'premium' : 'more info';
          small.appendChild((() => {
            const span = document.createElement('span');

            span.classList.add('visually-hidden');
            span.innerHTML = ` about ${extra.title}`;

            return span;
          })());

          return small;
        })());

        return a;
      })());


      div.appendChild(labelWrapper);
      div.appendChild((() => {
        const p = document.createElement('p');
        p.classList.add('extra-description');
        const price = extra.price ? `${extra.price} ` : '';
        p.setAttribute('id', `${pkgKey}-description`);
        if(!showPackageDescriptions) p.setAttribute('hidden', true);

        /*p.appendChild((() => {
          const img = document.createElement('img');
          img.setAttribute('src', './assets/img/modmore.svg');
          img.setAttribute('alt', 'modmore logo');
          return img;
          //<img src="./assets/img/modmore.svg" alt="modmore logo">
        })());*/

        p.appendChild(document.createTextNode(`${price}${extra.description}`));
        return p;
      })());
      appendTo.appendChild(div);
    })
  }

  function getCategoryDetail(category, extras) {
    console.log('getCategoryDetail', category, extras);

    const details = document.createElement('details');
    details.setAttribute('open', true);
    details.dataset.category = category.key;

    details.appendChild((() => {
      const summary = document.createElement('summary');
      summary.innerHTML = category.title;
      return summary;
    })());

    details.appendChild((() => {
      const fieldset = document.createElement('fieldset');

      const legend = document.createElement('legend');
      legend.classList.add('visually-hidden');
      legend.innerHTML = category.title;

      fieldset.appendChild(legend);

      addExtras(extras, fieldset);

      return fieldset;
    })());

    //console.log('details', details);

    return details;

/*
<details open="">
    <summary>Editing Packages</summary>
    <fieldset>
      <legend class="visually-hidden">Editing Packages</legend>
      <label for="pkg-redactor" class="field">
        <input type="radio" name="pkg-redactor-tinymce" id="pkg-redactor" data-preset="blog"> Redactor by modmore <a href="#"><small>more info<span class="visually-hidden"> about Redactor by modmore</span></small></a>
      </label>
      <label for="pkg-tinymce" class="field">
        <input type="radio" name="pkg-redactor-tinymce" id="pkg-tinymce"> TinyMCE <a href="#"><small>more info<span class="visually-hidden"> about TinyMCE</span></small></a>
      </label>
      <label for="pkg-ace" class="field">
        <input type="radio" name="pkg-ace-codemirror" id="pkg-ace"> Ace <a href="#"><small>more info<span class="visually-hidden"> about Ace</span></small></a>
      </label>
      <label for="pkg-codemirror" class="field">
        <input type="radio" name="pkg-ace-codemirror" id="pkg-codemirror"> CodeMirror <a href="#"><small>more info<span class="visually-hidden"> about CodeMirror</span></small></a>
      </label>
      <label for="pkg-blockdown" class="field">
        <input type="checkbox" name="pkg-blockdown" id="pkg-blockdown"> Blockdown <a href="#"><small>more info<span class="visually-hidden"> about Blockdown</span></small></a>
      </label>
    </fieldset>
</details>
*/
  }

});





















document.addEventListener('DOMContentLoaded', (event) => {

  (() => {
    document.getElementById('i-want-to-create-a').addEventListener('change', (event) => {
      const inputs = document.querySelectorAll('#i-would-like-to input, #install-these-packages input');
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if(input.dataset.dirty !== 'false') input.checked = false;
        //input.checked = false;
      }
    });
  })();

  (() => {
    const primaryBtns = document.querySelectorAll('section footer .primary');
    const breadcrumb = document.getElementById('breadcrumb'),
    breadcrumbRect = breadcrumb.getBoundingClientRect();
    for(let i = 0; i < primaryBtns.length; i++) {
      const primaryBtn = primaryBtns[i];
      primaryBtn.addEventListener('click', (event) => {

        console.log(event.target.closest('section'));
        try {
          scrollTo(event.target.closest('section').nextElementSibling.getBoundingClientRect().top - breadcrumbRect.height);
        } catch (e) {
          return;
        }
        event.preventDefault();
      });
    }
  })();

  listenDirty();
  document.getElementById('continue').addEventListener('click', (event) => {
      console.log('continue');


      const breadcrumb = document.getElementById('breadcrumb'),
      breadcrumbRect = breadcrumb.getBoundingClientRect();

      try {
        scrollTo(document.getElementById('installation-options').getBoundingClientRect().top - breadcrumbRect.height);
      } catch (e) {
        return;
      }
      event.preventDefault();
  })
  document.querySelector('#a11y-prefs-btn a').addEventListener('click', (event) => {

      window.location.hash = 'a11y-prefs';
      document.getElementById('a11y-prefs').removeAttribute('hidden');

      const breadcrumb = document.getElementById('breadcrumb'),
      breadcrumbRect = breadcrumb.getBoundingClientRect();

      try {
        scrollTo(document.getElementById('a11y-prefs').getBoundingClientRect().top - breadcrumbRect.height);
      } catch (e) {
        return;
      } finally {
        event.preventDefault();
      }

  });

  document.getElementById('hit-areas').addEventListener('change', (event) => {
    if(event.target.checked) {
      document.body.classList.add('wa-exaggerate-tap-areas');
    } else {
      document.body.classList.remove('wa-exaggerate-tap-areas');
    }
  })

  if(window.location.hash === '#a11y-prefs') {
    setTimeout(() => {
      document.querySelector('#a11y-prefs-btn a').click();
    }, 120);
  }

  const octalTables = document.querySelectorAll('.wa-octal-table');
  for(let i = 0; i < octalTables.length; i++) {
    const octalTable = octalTables[i];
    octalTable.addEventListener('change', (event) => {
      console.log(event.target);
      updateOctalTable(octalTable, event);
    });
    const octalTarget = document.getElementById(octalTable.dataset.octalTarget);
    octalTarget.addEventListener('change', (event) => {
      handleOctalTargetChange(octalTable, event);
    });
    octalTarget.addEventListener('input', (event) => {
      handleOctalTargetChange(octalTable, event);
    });
  }

  function clearInputChecked(octalTable) {
    const inputs = octalTable.querySelectorAll('input[type="checkbox"]');
    for(let i = 0; i < inputs.length; i++) inputs[i].checked = false;
  }



  function listenDirty() {
    const inputs = document.querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      input.addEventListener('change', (event) => {
        input.dataset.dirty = 'false';
      })
    }
  }

  function showHideOctalMessage(octalTable, octal) {
    if(octal === 777) {
      octalTable.closest('.wa-octal-table-wrapper').querySelector('.dangerous.balanced.message').removeAttribute('hidden');
    } else {
      octalTable.closest('.wa-octal-table-wrapper').querySelector('.dangerous.balanced.message').setAttribute('hidden', 'true');
    }
  }

  function handleOctalTargetChange(octalTable, event) {
    const octal = parseInt(event.target.value);

    showHideOctalMessage(octalTable, octal);

    const hundredths = Math.floor(octal / 100) * 100;
    const tenths = (Math.floor(octal / 10) * 10) - hundredths;
    const digit = octal - hundredths - tenths;
    //console.log(hundredths, tenths, digit);



    const hundredthCells = octalTable.querySelectorAll('tbody > tr:first-of-type > td:not(:first-child)'),
    tenthsCells = octalTable.querySelectorAll('tbody > tr:nth-of-type(2) > td:not(:first-child)'),
    digitCells = octalTable.querySelectorAll('tbody > tr:nth-of-type(3) > td:not(:first-child)');

    clearInputChecked(octalTable);
    checkCellRow(hundredths, hundredthCells);
    checkCellRow(tenths, tenthsCells);
    checkCellRow(digit, digitCells);

    function checkCellRow(t, cells) {
      for(let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const int = parseInt(cell.querySelector('input').dataset.octal);
        console.log(t, int);
        if(int <= t) {
          cell.querySelector('input').checked = true;
          t -= int;
        }
      }
    }

  }

  function updateOctalTable(octalTable, event) {
    const inputs = octalTable.querySelectorAll('input[type="checkbox"]');
    const octal = [...inputs].map((input) => (
      (input.checked) ? parseInt(input.getAttribute('data-octal')) : 0
    )).reduce((a, b) => (a + b));
    document.getElementById(octalTable.dataset.octalTarget).value = octal;

    showHideOctalMessage(octalTable, octal);

  }

  function checkWhatIWantDependent(event, dependent) {
    console.log(event.target.checked, event.target.dataset);
    if(event.target.checked) {

      const inputs = document.getElementById('i-would-like-to').querySelectorAll(`input[data-dependent*="${event.target.getAttribute('id')}"]`);
      console.log(inputs);
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if(input.dataset.dirty !== 'false') {
          console.log('checking!!! ', dependent);
          if(!shouldExempt(input)) {
            input.checked = true;
          }
        }
      }
    }
  }

  function shouldExempt(element) {
    try {
      return (element.dataset.pkgExempt && document.getElementById(element.dataset.pkgExempt).checked)
    } catch (e) {
      return false
    }
  }

  function exemptInputs(input) {
    console.log('exemptInputs', input.getAttribute('id'));
    const inputs = document.getElementById('packages-to-install').querySelectorAll(`input[data-pkg-exempt*="${input.getAttribute('id')}"]`);
    console.log(inputs);
    for(let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      input.checked = false;
    }
  }

  function handleContextInstallationInputChange(event) {
    console.log(event);

    if(event.target.getAttribute('type') == 'checkbox') {
      let msg = document.getElementById(event.target.dataset.message);
      if(event.target.checked) {

      } else {
        if(msg) {
          msg.innerHTML = msg.dataset.original;
        }
      }
    }

    try {
      if(document.getElementById(event.target.dataset.check).checked) document.querySelector(`[mx-bind="${event.target.getAttribute('id')}"]`).innerHTML = (event.target.dataset.preface) ? path.join(event.target.dataset.preface, event.target.value) : event.target.value;
    } catch (e) {
      console.error(e);
    }

    try {
      console.log(event.target.dataset.check);
      if(event.target.value) document.getElementById(event.target.dataset.check).checked = true;
    } catch (e) {
      console.error(e);
    }
  }

  document.getElementById('context-installation').addEventListener('change', handleContextInstallationInputChange);
  document.getElementById('context-installation').addEventListener('input', handleContextInstallationInputChange);

  document.getElementById('packages-to-install').addEventListener('change', (event) => {
    //console.log(event);

    function checkAll() {
      console.log('checkAll');
      const inputs = document.querySelectorAll('#packages-to-install input[type="checkbox"]:not(#i-like-it-all)');
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const wasChecked = input.checked;
        input.disabled = false;
        input.checked = true;
        if(wasChecked !== input.checked) input.dispatchEvent(new Event('change',{bubbles:true}));
      }

      const notCheckedRadios = document.querySelectorAll('input[data-default]:not(:checked)');
      for(let i = 0; i < notCheckedRadios.length; i++) {
        notCheckedRadios[i].checked = true;
      }

      //if(!document.getElementById('pkg-ace').checked && !document.getElementById('pkg-codemirror').checked) document.getElementById('pkg-ace').checked = true;
      //if(!document.getElementById('pkg-getresources').checked && !document.getElementById('pkg-pdotools').checked) document.getElementById('pkg-getresources').checked = true;
      //if(!document.getElementById('i-like-redactor').checked && !document.getElementById('i-like-tinymce').checked) document.getElementById('i-like-redactor').checked = true;
      //if(!document.getElementById('pkg-redactor').checked && !document.getElementById('pkg-tinymce').checked) document.getElementById('pkg-redactor').checked = true;
    }

    if(event.target.checked) {
      if(event.target.dataset.dependent) {
        /*if(event.target.dataset.dependent.trim() == "*") {

        }*/
        const dependents = event.target.dataset.dependent.trim().split(' ');
        console.log(dependents);
        dependents.map((dependent) => (`${dependent}`)).forEach((dependent) => {
          checkWhatIWantDependent(event, dependent);

          if(dependent.trim().replace('pkg-', '') == "*") {
            checkAll();
            //return;
          }

          try {
            const element = document.getElementById(dependent.trim());
            console.log(dependent.trim());
            //if(element.dataset.dirty !== 'false') element.checked = true;
            //console.log(element, element.dataset);
            if(!shouldExempt(element)) {
              console.log('checking', dependent);
              element.checked = true;
            }

          } catch (e) {
            console.log(event.target.dataset.dependent.trim());
            console.error(e);
          }
        });
      }
      //if(event.target.)
      exemptInputs(event.target);
    }
  });

  /*
  document.getElementById('i-want-it-all').addEventListener('change', (event) => {
    if(event.target.checked) {
      const inputs = document.querySelectorAll('#packages-to-install input[type="checkbox"]');
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = false;
        input.checked = true;
      }

      if(!document.getElementById('pkg-ace').checked && !document.getElementById('pkg-codemirror').checked) document.getElementById('pkg-ace').checked = true;
      if(!document.getElementById('pkg-getresources').checked && !document.getElementById('pkg-pdotools').checked) document.getElementById('pkg-getresources').checked = true;
      if(!document.getElementById('i-like-redactor').checked && !document.getElementById('i-like-tinymce').checked) document.getElementById('i-like-redactor').checked = true;
      if(!document.getElementById('pkg-redactor').checked && !document.getElementById('pkg-tinymce').checked) document.getElementById('pkg-redactor').checked = true;
    }
  });

  document.getElementById('i-like-commerce').addEventListener('change', (event) => {
    const inputs = document.querySelectorAll('fieldset.commerce input.default');
    if(event.target.checked) {

      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = false;
        if(input.dataset.dirty == 'true') input.checked = true;
      }
    } else {
      for(let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.disabled = true;
        if(input.dataset.dirty == 'true') input.checked = false;
      }
    }
  });
  */


  Mousetrap.bind('alt+d', function(e) {
    const input = document.getElementById('show-package-descriptions');
    input.checked = !input.checked;

    input.dispatchEvent(new Event('change',{bubbles:true}));
    //input.dispatchEvent(new Event('input',{bubbles:true}));
});


  function scrollTo(to) {
      window.scrollBy({
          top: to,
          //left: 0,
          behavior: 'smooth'
      });
  }
}); // end onDOMContentLoaded
