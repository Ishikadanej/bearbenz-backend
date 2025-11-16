import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bearbenz',

  projectId: '3yqgdekn',
  dataset: 'bearbenz',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
