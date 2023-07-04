import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";

export const settings: SettingSchemaDesc[] = [
  {
    key: 'idiomApiKey',
    title: '聚合数据的 api key',
    description: '如果遇到请求超过次数限制，请自行申请聚合数据成语大全 key 并填入, https://www.juhe.cn/docs/api/id/157',
    default: '693e8050c9d18b06775f99bc5470bfb5',
    type: 'string',
  }
]
