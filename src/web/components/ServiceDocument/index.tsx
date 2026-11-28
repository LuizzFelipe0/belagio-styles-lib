import { serviceDocStyles } from './styles'
import { ServiceDocumentProps } from './types'
import { ServiceDocumentHeader }   from './ServiceDocumentHeader'
import { ServiceDocumentMetaRow }  from './ServiceDocumentMetaRow'
import { ServiceDocumentSection }  from './ServiceDocumentSection'

export type { ServiceDocumentProps, ServiceDocumentSection as ServiceDocumentSectionType, ServiceDocumentColumn, ServiceDocumentRow, ServiceDocumentMeta } from './types'

export const ServiceDocument = ({
  logo,
  logoAlt,
  companyName,
  tagline,
  contactLines,
  documentTitle,
  meta,
  sections,
  footerText
}: ServiceDocumentProps) => {


  return (
    <>
      <div id="service-document" style={serviceDocStyles.wrapper}>

        <ServiceDocumentHeader
          logo={logo}
          logoAlt={logoAlt}
          companyName={companyName}
          tagline={tagline}
          contactLines={contactLines}
        />

        <div style={serviceDocStyles.titleBar}>{documentTitle}</div>

        {meta && meta.length > 0 && <ServiceDocumentMetaRow meta={meta} />}

        {sections.map((section, i) => (
          <ServiceDocumentSection key={i} section={section} />
        ))}

        {footerText && <div style={serviceDocStyles.footer}>{footerText}</div>}

      </div>
    </>
  )
}