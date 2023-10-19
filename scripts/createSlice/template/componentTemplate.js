const firstLetterUppercase = require("../firstLetterUppercase");

const interfaceConst = "interface";

module.exports = (sliceName) => {
  const componentName = firstLetterUppercase(sliceName);

  return `import { memo } from 'react'
import cls from './${componentName}.module.scss'
import {classNames} from 'shared/lib'

${interfaceConst} ${componentName}Props {
    className?: string
}

export const ${componentName} = memo(({className}: ${componentName}Props) => {
    return (
        <div className={classNames([cls.${sliceName}, className])}>

        </div>
    )
})`;
};
