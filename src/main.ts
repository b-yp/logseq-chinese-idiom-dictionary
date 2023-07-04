import "@logseq/libs";

import { logseq as PL } from "../package.json";

import { api } from "./api";

const pluginId = PL.id;

function main() {
  console.info(`#${pluginId}: MAIN`);

  const handleInsertIdiomDictionary = async () => {
    const page = await logseq.Editor.getCurrentPage()

    if (!page) return

    const idiomRes = await api.fetchIdioms(page.name)
    const idiom = idiomRes.result
    if (idiomRes.error_code !== 0) {
      logseq.UI.showMsg(`${idiomRes.error_code}-${idiomRes.reason}`, 'error')
      return
    }
    const properties = {
      '拼音': `\`${idiom.pinyin}\`` || '-',
      '基本释义': idiom.jbsy?.[0] || '-',
      '出处': idiom.chuchu || '-',
      '例句': idiom.liju || '-',
      '近义词': idiom.jyc ? idiom.jyc.map(i => `[[${i}]]`).join(' ') : '-',
      '反义词': idiom.fyc ? idiom.fyc.map(i => `[[${i}]]`).join(' ') : '-',
    }

    await logseq.Editor.prependBlockInPage(page.uuid, '', { properties })

    if (!idiom.xxsy) return

    const block = await logseq.Editor.appendBlockInPage(page.uuid, '详细释义')

    if (!block?.uuid) return

    logseq.Editor.insertBatchBlock(block.uuid, idiom.xxsy.map(i => ({ content: i })), { sibling: false })
  }
  logseq.App.registerPageMenuItem('插入成语词典', handleInsertIdiomDictionary)
}

logseq.ready(main).catch(console.error);
