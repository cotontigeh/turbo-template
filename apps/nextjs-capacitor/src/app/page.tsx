"use client";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function Home() {
  return (
    <>
      <IonHeader>
        <IonToolbar />
      </IonHeader>
      <IonContent>
        <div className="p-4">
          <h1 className="text-xl font-bold">Content</h1>
        </div>
      </IonContent>
      <IonFooter className="fixed bottom-0">
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
