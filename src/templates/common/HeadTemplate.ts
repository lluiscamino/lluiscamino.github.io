import Template from '../Template';
import ConfigOptions from '../../types/ConfigOptions';

class HeadTemplate implements Template {
  render(
    config: ConfigOptions,
    extraOptions: {pageName?: string} = {},
  ): string {
    const title = extraOptions.pageName
      ? config.longName + config.pageNameSeparator + extraOptions.pageName
      : config.longName;
    return `
    <head>
      <meta charset="UTF-8">
      <meta name="theme-color" content="#212529">
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Lluís Camino's personal website">
      <script src="https://kit.fontawesome.com/cdb8c58e3d.js" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <link href="styles/main.css" rel="stylesheet">
      <link href="styles/videoheader.css" rel="stylesheet">
      <link rel="apple-touch-icon" sizes="180x180" href="media/favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="media/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="media/favicon/favicon-16x16.png">
      <link rel="manifest" href="manifest.json">
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6KGFV1VJ6"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-L6KGFV1VJ6');
      </script>
    </head>
    `;
  }
}

export default HeadTemplate;
