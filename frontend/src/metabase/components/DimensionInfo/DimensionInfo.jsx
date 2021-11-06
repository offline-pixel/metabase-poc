import React from "react";
import PropTypes from "prop-types";
import { t } from "ttag";

import Dimension from "metabase-lib/lib/Dimension";
import DimensionLabel from "metabase/components/DimensionLabel";

import {
  Container,
  Description,
  EmptyDescription,
} from "./DimensionInfo.styled";

DimensionInfo.propTypes = {
  className: PropTypes.string,
  dimension: PropTypes.instanceOf(Dimension).isRequired,
};

function DimensionInfo({ className, dimension }) {
  const field = dimension.field();
  const description = field?.description;
  return (
    <Container className={className}>
      {description ? (
        <Description>{description}</Description>
      ) : (
        <EmptyDescription>{t`No description`}</EmptyDescription>
      )}
      <DimensionLabel dimension={dimension} />
    </Container>
  );
}

export default DimensionInfo;
