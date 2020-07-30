import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecordingsHook } from '../Hooks/RecordingsHook';
import RecordingsView from '../components/RecordingsView/RecordingsView';

const RecordingsViewContainer = () => {

  const { id } = useParams();

  const { recordings } = useRecordingsHook(id);

  return (
    <section>
      <RecordingsView recordings={recordings}/>
    </section>
  );
};

export default RecordingsViewContainer;
