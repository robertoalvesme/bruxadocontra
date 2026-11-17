/** @type {import('tailwindcss').Config} */
// Paleta da Bruxa do Contra (temp/paleta-de-cores.jpeg) + o terracota do logotipo.
export default {
  safelist: ['font-sans', 'font-display', 'font-serif'],
  theme: {
    extend: {
      colors: {
        // Fundo escuro do site (cabecalho, rodape, faixas): marrom-tinta por padrao,
        // verde-floresta com ?tema=verde (variaveis em main.css).
        night: {
          DEFAULT: 'rgb(var(--bdc-night) / <alpha-value>)',
          deep: 'rgb(var(--bdc-night-deep) / <alpha-value>)',
          soft: 'rgb(var(--bdc-night-soft) / <alpha-value>)',
        },
        // Verde-floresta: no tema marrom, so em acentos (o cartao da consulta ao vivo).
        forest: { DEFAULT: '#20382C', deep: '#172A21', soft: '#2C4A3B' },
        // Detalhes, molduras, icones. Como texto, so sobre o verde (contraste).
        gold: { DEFAULT: '#B49A60', dark: '#8A7340', light: '#D9C79B' },
        // Fundo das paginas e areas de leitura.
        parchment: { DEFAULT: '#F3EBDD', dark: '#E8DCC6', light: '#FAF6EE' },
        // Cards secundarios, etiquetas, elementos naturais.
        olive: { DEFAULT: '#6D7659', light: '#A3AA8E' },
        // Textos e titulos.
        ink: { DEFAULT: '#352B26', soft: '#5C4F47' },
        // O "BRUXA" do logotipo: so em pequenos acentos.
        terracotta: { DEFAULT: '#C0562D', dark: '#9E4321' },
      },
      fontFamily: {
        // Titulos: serifada classica, como o letreiro do logotipo.
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Rotulos em caixa alta e a marca.
        display: ['Cinzel', 'Georgia', 'serif'],
        // Texto corrido.
        sans: ['"Josefin Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1200px', prose: '68ch' },
    },
  },
  plugins: [],
}
