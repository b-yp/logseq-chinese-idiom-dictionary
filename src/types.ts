export type Idiom = {
  name: string;              /** 查询的成语 */
  pinyin: string | null;     /** 拼音，可能为空 */
  jbsy: Array<string> | null;   /** 基本释义，可能为null */
  xxsy: Array<string> | null;   /** 详细释义，可能为null */
  chuchu: string | null;     /** 出处，可能为空 */
  liju: string | null;       /** 例句，可能为空 */
  jyc: Array<string> | null;    /** 近义词，可能为null */
  fyc: Array<string> | null;    /** 反义词，可能为null */
};

export type IdiomResponse = {
  error_code: number /** 错误码 */
  reason: string  /** 错误信息 */
  result: Idiom 
}
