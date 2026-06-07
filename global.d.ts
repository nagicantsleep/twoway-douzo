import common from './messages/vi/common.json';
import chart from './messages/vi/chart.json';
import form from './messages/vi/form.json';
import home from './messages/vi/home.json';
import insight from './messages/vi/insight.json';
import knowledge from './messages/vi/knowledge.json';
import library from './messages/vi/library.json';
import preview from './messages/vi/preview.json';
import share from './messages/vi/share.json';
import starDetail from './messages/vi/star-detail.json';

type ViMessages = typeof common & {
  chart: typeof chart;
  form: typeof form;
  home: typeof home;
  insight: typeof insight;
  knowledge: typeof knowledge;
  library: typeof library;
  preview: typeof preview;
  share: typeof share;
  'star-detail': typeof starDetail;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace AppConfig {
    type Messages = ViMessages;
  }
}

export {};
