import '@aws-amplify/ui-components';
import { applyPolyfills,defineCustomElements,} from '@aws-amplify/ui-components/loader';
import Vue from 'vue';
import {Amplify , Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { I18n } from "aws-amplify";
import { Translations } from "@aws-amplify/ui-components";
import ja from '@aws-amplify-jp/vocabulary-ja';

I18n.putVocabulariesForLanguage("ja-JP", ja(Translations));

Vue.config.ignoredElements = [/amplify-\w*/];


applyPolyfills().then(() => {
  defineCustomElements(window);
});

Amplify.configure(awsconfig);// >>New - Configuring Auth Module
Vue.use(Amplify);
Auth.configure(awsconfig);
