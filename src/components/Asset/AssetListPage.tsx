import { Alert, Container, Heading4 } from '@/components/ui';
import { AssetHeadingContainer, AssetsFuseSearch, AssetsGrid, EditAssetCard } from '@/components/Asset';
import { useTranslation } from 'react-i18next';
import useAssetsFuseSearch from '@/hooks/useAssetsFuseSearch';
import useCollectedAssetsStore from '@/store/collectedAssetsStore';
import type { Asset } from '@/types';
import type { CollectedAssetsKeys } from '@/store/collectedAssetsStore';

interface Props {
  assets: Asset[];
  assetKey: CollectedAssetsKeys;
  title: string;
}

const AssetListPage = (props: Props) => {
  const { assets, assetKey, title } = props;

  const { t } = useTranslation();

  const { filteredAssets, setSearch, search } = useAssetsFuseSearch(assets);
  const resetCollectedAssets = useCollectedAssetsStore((state) => state.resetCollectedAssets);

  const handleResetCollectedAssets = () => {
    resetCollectedAssets();
  };

  return (
    <Container maxWidth='2xl'>
      <AssetHeadingContainer>
        <Heading4 className='m-0'>{title}</Heading4>

        <div className='flex flex-col sm:flex-row gap-2'>
          <button
            className='text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700'
            onClick={handleResetCollectedAssets}
            type='button'
          >
            Reset all
          </button>

          <AssetsFuseSearch onChangeSearch={setSearch} />
        </div>
      </AssetHeadingContainer>

      {filteredAssets.length === 0 ? (
        <Alert severity='info'>{t('noResultsFor', { search })}</Alert>
      ) : (
        <AssetsGrid>
          {filteredAssets.map((asset) => (
            <EditAssetCard
              asset={asset}
              assetKey={assetKey}
              key={asset.id}
            />
          ))}
        </AssetsGrid>
      )}
    </Container>
  );
};

export default AssetListPage;
