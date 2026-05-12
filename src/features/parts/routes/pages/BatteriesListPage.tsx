import { useTranslation } from 'react-i18next';
import AssetListPage from '@/components/Asset/AssetListPage';
import useBatteries from '../../hooks/useBatteries';

const BatteriesListPage = () => {
  const batteries = useBatteries();

  const { t } = useTranslation(['parts']);

  return (
    <AssetListPage
      assetKey='batteries'
      assets={batteries}
      title='Batteries'
    />
  );
};

export default BatteriesListPage;
