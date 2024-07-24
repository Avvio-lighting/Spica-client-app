import { useTranslations } from 'next-intl';
import DataSheet from '../DataSheet/DataSheet';

const Descreption = ({ product, locale }) => {
  let desc = product.description[locale].split('.');
  desc = desc.slice(0, desc.length - 1);
  const t = useTranslations('product');

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.heading}>{product.name[locale]}</h1>

        <ul className={style.ul}>
          {desc.map((text, index) => {
            return (
              <li className={style.li} key={index}>
                {text}.
              </li>
            );
          })}
        </ul>
      </div>

      <div className={style.fluxContainer}>
        <span className={style.fluxHeading}>{t('info.flux')}</span>
        <span className={style.fluxText}>
          {product['LED LUMINAIRE']['Luminous Flux *(lm)'][0]}{' '}
          {product['LED LUMINAIRE']['Luminous Flux *(lm)'][0] !=
          product['LED LUMINAIRE']['Luminous Flux *(lm)'][
            product['LED LUMINAIRE']['Luminous Flux *(lm)'].length - 1
          ]
            ? ' To ' +
              product['LED LUMINAIRE']['Luminous Flux *(lm)'][
                product['LED LUMINAIRE']['Luminous Flux *(lm)'].length - 1
              ] +' '
            : ''}
          {t('info.lumens')}
        </span>
      </div>

      <div className={style.producerContainer}>
        <div className={style.producerTextContainer}>
          <span> {t('info.producer')}</span>
          <span className={style.producerText}>Spica Solar</span>
        </div>
        <div className={style.producerTextContainer}>
          <span> {t('info.category')}</span>
          <span className={style.producerText}>
            {product.category.text[locale]}
          </span>
        </div>
      </div>
      <DataSheet product={product} />
    </div>
  );
};

export default Descreption;

//* Style
const style = {
  container: `lg::w-[50%] mt-5 flex-1`,
  textContainer: `border-b-[2px] border-solid border-b-dolphine/20`,
  heading: `text-3xl font-semibold md:text-4xl`,
  ul: `list-disc p-4`,
  li: `py-2 text-dolphine`,
  fluxContainer: `m-2 border-b-[2px] border-solid border-b-dolphine/20 p-2`,
  fluxHeading: `text-sm text-dolphine`,
  fluxText: `block text-xl font-semibold`,
  producerContainer: `text-sm text-dolphine`,
  producerTextContainer: `flex gap-10 py-3`,
  producerText: `font-semibold text-charcoal`,
};
