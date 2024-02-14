import { defineConfig } from '@mazui/cli'

export default defineConfig({
  outputCssFilePath: './src/assets/css/maz-ui-variables.css',
  theme: {
    colors: {
      primary: 'hsl(210, 100%, 56%)',
      secondary: 'hsl(164, 76%, 46%)',
      info: 'hsl(188, 78%, 41%)',
      success: 'hsl(80, 61%, 50%)',
      warning: 'hsl(40, 97%, 59%)',
      danger: 'hsl(1, 100%, 71%)',
      bgOverlay: 'hsl(0, 0%, 0% / 30%)',
      lightTheme: {
        textColor: 'hsl(0, 0%, 85%)',
        colorMuted: 'hsla(0, 0%, 0%, 0.54)',
        bgColor: '#fff',
      },
      darkTheme: {
        textColor: 'hsl(210, 8%, 14%)',
        colorMuted: '#10192D',
        bgColor: '#10192D',
      },
    },
    borderWidth: '0.125rem',
    borderRadius: '0.5rem',
   
  },
})