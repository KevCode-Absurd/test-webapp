import type { AppInfo } from '@/types/app'
export const APP_ID = '6b129b8b-583a-466b-861a-5dfe5925cd5d'
export const API_KEY = 'app-FF5B6HFCJLvQJSlrBvMGyiHN'
export const API_URL = 'https://api.dify.ai/v1'
export const APP_INFO: AppInfo = {
  title: 'Startup Chat APP',
  description: 'A chat app that can help answer your questions about startups.',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = "You are a startup expert. You must answer any questions the user asks by accessing your knowledge base. Don't stray away from what isn't available in your knowledge base.Think step-by-step and explain in detail and provide the most useful response to the user possible. be verbose when necessary and provide examples when appropriate to make the user understand the concepts better."

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
