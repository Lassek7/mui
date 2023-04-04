const appBackground = {
  backgroundColor: '#2B2930', // Replace with your desired color
  width: '100%',
  minHeight: '100vh',
};


const mainCard = {
  width: "calc(100% - 32px)", 
  height: "194px", 
  position: "absolute", 
  marginLeft: "16px", 
  bottom: "88px", 
  borderRadius: "16px", 
  background: "rgba(118, 118, 128, 0.24)",
};

const DroneCard = {
  maxWidth: '340px', 
  maxHeight: '130px',  
  border: '3px solid #4D766C', 
  borderRadius:"12px", 
  backgroundColor:'#434246', 
  color: "#EBEBF5"
};

const DroneCardSelected = {
  maxWidth: '340px', 
  maxHeight: '130px',  
  border: '1px solid #4D766C', 
  borderRadius:"12px", 
  backgroundColor:'#434246',
  rgba: "(59, 189, 158, 0.5)",
};

const DroneCardButtons = {
  minWidth: '146px',
  height: '56px',
  borderRadius: '50px',
  alignItems: 'center',
};

const MissionCard = {

};

const MissionCardSelected = {

};
const CardActionsInCards = {
  width: "calc(100% - 32px)", 
  overflow: "auto", 
  marginLeft: "16px"
};

const fullMapStyle = {
  position: 'absolute',
  borderRadius: '16px',
  overflow: 'hidden',
  left: '20px',
  right: '20px',
  top: '20px',
  bottom: '110px'
}

const halfMapStyle = {
  position: 'absolute',
  borderRadius: '16px',
  overflow: 'hidden',
  left: '20px',
  right: '20px',
  top: '20px',
  bottom: '300px'
}

const emergencyStop = {
  borderRadius: '16px',
  width: '56px',
  height: '56px',
  backgroundColor: '#902626',
  color: '#EBEBF5',
  '&:hover': { //on hover
    backgroundColor: '#902626',
    color: '#EBEBF5',
  },
};

const layerBtn = {
  borderRadius: '16px',
  width: '56px',
  height: '56px',
  backgroundColor: '#2B2930',
  color: '#EBEBF5',
  '&:hover': { //on hover
    backgroundColor: '#2B2930',
    color: '#EBEBF5',
  },
};

const plusBtn = {
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  borderBottomRightRadius: '0px',
  borderBottomLeftRadius: '0px',
  width: '56px',
  height: '56px',
  backgroundColor: '#2B2930',
  color: '#EBEBF5',
  '&:hover': { //on hover
    backgroundColor: '#2B2930',
    color: '#EBEBF5',
  },
};

const minusBtn = {
  
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
  borderBottomRightRadius: '16px',
  borderBottomLeftRadius: '16px',
  width: '56px',
  height: '56px',
  backgroundColor: '#2B2930',
  color: '#EBEBF5',
  '&:hover': { //on hover
    backgroundColor: '#2B2930',
    color: '#EBEBF5',
  },
  borderTop: '1px solid rgba(235, 235, 245, 0.1)'
};

const bottomMenu = {
  height: "70px", 
  display: 'flex', 
  justifyContent: 'space-between', 
  backgroundColor:'#2B2930', 
  alignItems: "center", 
  borderTop: '1px solid rgba(235, 235, 245, 0.1)'
  
};

const bottomMenuLabels = {
  color: '#FFFFFF', 
  padding: 1.5 
};

const minSizeBold = {
  color: '#FFFFFF', 
  fontSize:16, 
  fontWeight:"bold"
};

const minSizeReg = {
  color: '#FFFFFF', 
  fontSize:16, 
};


const Styles = {
  emergency: emergencyStop,
  fullMap: fullMapStyle,
  halfMap: halfMapStyle,
  bottomMenu: bottomMenu,
  bottomMenuLabels: bottomMenuLabels,
  appBackground: appBackground,
  mainCard: mainCard,
  CardActionsInCards: CardActionsInCards,
  minSizeBold: minSizeBold,
  droneCard: DroneCard,
  missionCard: MissionCard,
  droneCardSelected: DroneCardSelected,
  missionCardSelected: MissionCardSelected,
  minSizeReg: minSizeReg,
  droneCardButtons: DroneCardButtons,
  layerBtn: layerBtn,
  plusBtn: plusBtn,
  minusBtn: minusBtn,

}

  export default Styles