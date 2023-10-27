import db from "../data/db.json";
import { generateIdFromName, sanitizePayload } from "../utility";

const delay = 500;

export const getAllCampaigns = async (filters = {}) => {
  filters = sanitizePayload(filters);
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          db.campaigns.filter((each) => {
            const mappedFilterList = Object.entries(filters).map(
              ([key, value]) => {
                switch (key) {
                  case "isOngoing":
                    return each?.isOngoing === value;

                  default:
                    return true;
                }
              }
            );

            const campaignMatchesFilter = mappedFilterList.reduce(
              (a, b) => a && b,
              true
            );
            console.log({ campaignMatchesFilter });
            return campaignMatchesFilter;
          })
        );
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleCampaign = async (campaignId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          db.campaigns.find((each) => {
            return !campaignId ? each?.isOngoing : each?.id === campaignId;
          })
        );
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllCategories = async (campaignId, filters = {}) => {
  filters = sanitizePayload(filters);
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          db.campaigns
            ?.find((each) => {
              return !campaignId ? each?.isOngoing : each?.id === campaignId;
            })
            ?.categories?.filter((each) => {
              const mappedFilterList = Object.entries(filters).map(
                ([key, value]) => {
                  switch (key) {
                    case "name":
                      return (
                        generateIdFromName(each?.name) ===
                        generateIdFromName(value).replace(/-/gi, " ")
                      );

                    default:
                      return true;
                  }
                }
              );

              const categoryMatchesFilter = mappedFilterList.reduce(
                (a, b) => a && b,
                true
              );
              console.log({ categoryMatchesFilter });
              return categoryMatchesFilter && !each?.winner_id;
            })
        );
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleCategory = async (campaignId, categoryId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          db.campaigns
            ?.find((each) => {
              return each?.id === campaignId;
            })
            ?.categories?.find((each) => {
              return each?.id === categoryId;
            })
        );
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};

export const getRecentWinners = async (association) => {
  const camp = await getAllCampaigns({ isOngoing: false });
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          camp
            ?.filter((each) => {
              return !association
                ? each?.isOngoing === false
                : each?.association === association &&
                    each?.isOngoing === false;
            })
            ?.reduce((a, b) => {
              const { categories, ...CampaignInfo } = b;
              return a.concat(categories.map((c) => ({ ...c, CampaignInfo })));
            }, [])
            ?.filter((each) => {
              return !!each?.winner_id;
            })
            ?.map((each) => ({
              ...each,
              winner: each?.candidates.find((a) => a.id === each.winner_id),
            }))
        );
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};
