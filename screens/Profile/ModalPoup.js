import React from "react";
import { View, Modal, Animated } from 'react-native';
import profileStyles from "./styles_profile";

const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Modal transparent visible={showModal}>
            <View style={profileStyles.modalBackGround}>
                <Animated.View
                    style={[profileStyles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

export default ModalPoup;
