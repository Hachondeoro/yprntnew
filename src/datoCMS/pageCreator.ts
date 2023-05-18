// Packages
// yarn add @datocms/cma-client-node@1.1.22 --save-exact
// yarn add graphql-request
// yarn add graphql
// yarn add html-react-parser

console.log('Creating pages from datoCMS');
const token = 'a08ac1b8fb0f6e67ceefab2e065759';

const client = require('@datocms/cma-client-node').buildClient({ apiToken: token });

const initializePage = async pageName => {
  const model_api_key = pageName.toLowerCase();
  await client.itemTypes.create({
    name: pageName,
    api_key: model_api_key,
    singleton: true,
  });

  await client.fields.create(model_api_key, {
    label: 'Title',
    api_key: 'title',
    field_type: 'string',
    default_value: 'Page title goes here',
    validators: { required: {} },
  });

  await client.fields.create(model_api_key, {
    label: 'Content',
    api_key: 'content',
    field_type: 'text',
    default_value: 'Page content goes here',
    validators: { required: {} },
    appearance: {
      addons: [],
      editor: 'wysiwyg',
      // prettier-ignore
      parameters: {"toolbar":["format","bold","italic","strikethrough","code","ordered_list","unordered_list","quote","table","link","image","show_source","undo","redo","align_left","align_center","align_right","align_justify","outdent","indent","fullscreen"]},
      type: 'wysiwyg',
    },
  });
};

const createTeamMembers = async () => {
  await client.itemTypes.create({
    name: 'People',
    api_key: 'person',
  });
  await client.fields.create('person', {
    label: 'Name',
    api_key: 'name',
    field_type: 'string',
    default_value: 'Person name',
    validators: { required: {} },
  });
  await client.fields.create('person', {
    label: 'Occupation',
    api_key: 'occupation',
    field_type: 'string',
    default_value: 'Person occupation',
    validators: { required: {} },
  });
  await client.fields.create('person', {
    label: 'Photo',
    api_key: 'photo',
    field_type: 'file',
    validators: {
      required: {},
      file_size: { min_value: 0, max_value: 1, min_unit: 'MB', max_unit: 'MB' },
    },
  });
};

// createTeamMembers();

// Initialize pages
// Rules:
// 1. Page name must not be in plural (s at the end)
// 2. Execute: node datoCMS/pageCreator.ts
const Pages = ['CyberSecurity', 'CloudService', 'Microsoft365Training', 'PitchTraining'].map(
  page => {
    initializePage(page);
  },
);

// client.fields.list('service1').then(fields => {
//   console.log(fields);
// });
