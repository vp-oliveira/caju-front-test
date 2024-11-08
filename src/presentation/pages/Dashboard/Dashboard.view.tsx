import { HiRefresh } from "react-icons/hi";

import { Collumns } from "./components/Columns/Columns.view";
import { SearchBar } from "./components/Searchbar/SearchBar.view";
import * as S from "./Dashboard.styles";

import { LoadRegistrations } from "@/core/domain/registrations";
import { Loading, PageContainer } from "@/presentation/components";
import { Button } from "@/presentation/components/Buttons";
import { IconButton } from "@/presentation/components/Buttons/IconButton";
import { useNavigateUrl } from "@/presentation/hooks";

export const DashboardPage = (props: {
  loadingRegistrations: boolean;
  getRegistrations: Array<LoadRegistrations.DataModel>;
  handleGetRegistrations: () => void;
  setReload: (value: boolean) => void;
}) => {
  const {
    getRegistrations,
    loadingRegistrations,
    handleGetRegistrations,
    setReload,
  } = props;

  const { navigate } = useNavigateUrl();

  return (
    <PageContainer>
      <S.Container>
        <S.TopBar>
          <SearchBar handleGetRegistrations={handleGetRegistrations} />
          <div>
            <IconButton
              aria-label="refetch"
              onClick={() => handleGetRegistrations()}
            >
              <HiRefresh />
            </IconButton>
            <Button
              onClick={() => {
                navigate("/new-user");
              }}
            >
              Nova Admissão
            </Button>
          </div>
        </S.TopBar>
        <S.Content>
          {loadingRegistrations && <Loading />}
          {!loadingRegistrations && getRegistrations?.length > 0 && (
            <Collumns registrations={getRegistrations} setReload={setReload} />
          )}
          {!loadingRegistrations && getRegistrations?.length === 0 && (
            <div>Nenhum resultado</div>
          )}
        </S.Content>
      </S.Container>
    </PageContainer>
  );
};
