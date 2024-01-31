// import React, {useState} from 'react';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

// const PatientCalendar = () => {
//   const [selected, setSelected] = useState('');

//   return (
//     <Calendar
//       onDayPress={day => {
//         setSelected(day.dateString);
//       }}
//       markedDates={{
//         [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
//       }}
//     />
//   );
// };

// export default PatientCalendar;

import React, { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View,ScrollView,StyleSheet} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, LocaleConfig, Agenda } from "react-native-calendars";
import { Input } from "@rneui/base";
import DropDownPicker from "react-native-dropdown-picker";


LocaleConfig.locales["tr"] = {
  monthNames: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
  monthNamesShort: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ],
  dayNames: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ],
  dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  today: "Bugün",
};
LocaleConfig.defaultLocale = "tr";
DropDownPicker.setLanguage("TR");

const PatientCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [duration, setDuration] = useState("");
  const [open, setOpen] = useState(false);
  const [frequency, setName] = useState("");
  const [items, setItems] = useState([
    { label: "Günde 3 defa", value: "3" },
    { label: "Günde 2 defa", value: "2" },
    { label: "Günde 1 defa", value: "1" },
    { label: "2 günde 1 defa", value: "1/2" },
    { label: "3 günde 1 defa", value: "1/3" },
  ]);

  const PatientEvents = 
    {startDate:'2024-01-02', duration:10, frequency:"1/2"}
    useEffect(() => {
      handleMarkDates()
    }, [])
    
  
  // console.log(frequen

  const handleMarkDates = () => {
    if (PatientEvents.startDate && PatientEvents.duration && PatientEvents.frequency) {
      const marked = {};
      const start = new Date(PatientEvents.startDate);
      const end = new Date(start.getTime() + PatientEvents.duration * 24 * 60 * 60 * 1000); // Başlangıç tarihine süreyi ekleyerek bitiş tarihini hesaplıyoruz
      const currentDate = new Date(start);

      let dayCount = 1; 

      while (currentDate <= end) {
        const dateString = currentDate.toISOString().split("T")[0];

        if (PatientEvents.frequency === "1/3") {
          if (dayCount % 3 === 1) {
            marked[dateString] = {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "orange",
            };
          }
        } else if (PatientEvents.frequency === "1/2") {
          if (dayCount % 2 === 1) {
            marked[dateString] = {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "orange",
            };
          }
        } else if (PatientEvents.frequency === "2") {
          marked[dateString] = {
            dots: [
              { key: "dot1", color: "#023047" },
              { key: "dot2", color: "#023047" },
            ],
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
          };
        } else if (PatientEvents.frequency === "3") {
          marked[dateString] = {
            dots: [
              { key: "dot1", color: "#023047" },
              { key: "dot2", color: "#023047" },
              { key: "dot3", color: "#023047" },
            ],
            selected: true,
            disableTouchEvent: true,
            name: "deneme",
            selectedColor: 'orange',
          };
        } else {
          marked[dateString] = {
            selected: true,
            disableTouchEvent: true,
            selectedColor
            : "orange",
          };
        }

        currentDate.setDate(currentDate.getDate() + 1);
        dayCount++; // Günlük sayacı artırılır
      }

      setMarkedDates(marked);
    }
  };

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowStart(false);
    setStartDate(currentDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEnd(false);
    setEndDate(currentDate);
  };

  const showModeStart = (currentMode) => {
    setShowStart(true);
    setMode(currentMode);
  };

  const showDatepickerStart = () => {
    showModeStart("date");
  };

  return (
    
      <View style={{
        padding:50,
        backgroundColor:"red"
        
      }}>
    
      <View style={{ marginTop: 20 }}>
        <Button title="Tarih Aralığını İşaretle" onPress={handleMarkDates} />
        <Calendar markedDates={markedDates} markingType="multi-dot" />
        
      </View>
      </View>
    
  );
};

export default PatientCalendar;

// const styles = StyleSheet.create({
//   container: {
//     padding:50
    
//   }})