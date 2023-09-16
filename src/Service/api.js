export const UserFetcher = async (userId) => {
    try {
      const userDataResponse = await fetch(`http://localhost:4000/user/${userId}`);
      const userData = await userDataResponse.json();
  
      const activityDataResponse = await fetch(`http://localhost:4000/user/${userId}/activity`);
      const activityData = await activityDataResponse.json();
  
      const averageSessionsResponse = await fetch(`http://localhost:4000/user/${userId}/average-sessions`);
      const averageSessionsData = await averageSessionsResponse.json();
  
      const performanceDataResponse = await fetch(`http://localhost:4000/user/${userId}/performance`);
      const performanceData = await performanceDataResponse.json();
  
      return {
        userData,
        activityData,
        averageSessionsData,
        performanceData,
      };
    } catch (error) {
      throw new Error('Une erreur s\'est produite lors de la récupération des données.');
    }
  };
  