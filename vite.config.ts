import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
export default defineConfig({base:(process.env.NEXT_PUBLIC_BASE_PATH??'')+'/',css:{postcss:{plugins:[tailwindcss()]}},plugins:[vinext(),...(process.env.PORTFOLIO_GITHUB_PAGES==='true'?[]:[sites()])],server:{host:'127.0.0.1'}});
