import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SvgUri } from 'react-native-svg';

// =========================================================================
// 1. TẦNG THẤP NHẤT: COMPONENT HIỂN THỊ ICON TỰ ĐỘNG THEO NỀN TẢNG (ATOMIC)
// =========================================================================
const BASE_URL = 'https://raw.githubusercontent.com/ndhung23/ass1-MMA301/main/assets';

const RemoteIcon = ({ uri, width = 24, height = 24, style }) => {
  if (!uri || uri.endsWith('/')) {
    return <View style={[{ width, height }, style]} />;
  }

  const isSvg = uri.toLowerCase().includes('.svg');

  if (Platform.OS === 'web' || !isSvg) {
    return (
      <Image
        source={{ uri }}
        style={[{ width, height }, style]}
        resizeMode="contain"
      />
    );
  }

  return (
    <View style={[{ width, height, justifyContent: 'center', alignItems: 'center' }, style]}>
      <SvgUri width={width} height={height} uri={uri} />
    </View>
  );
};

// =========================================================================
// 2. TẦNG TRUNG GIAN: MÀN HÌNH 1 - ALL APPS (HARDCODE TỪNG DÒNG ITEM)
// =========================================================================
const AllAppsScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.containerFlex}>
      {/* 2.1 Thanh tìm kiếm + Icon Grid */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <RemoteIcon
            uri={`${BASE_URL}/04_ui_controls/ic_common_search_gray.svg`}
            width={18}
            height={18}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Type feature's name"
            placeholderTextColor="#9E9E9E"
            value={searchText}
            onChangeText={setSearchText}
            style={styles.input}
          />
        </View>

        <RemoteIcon
          uri={`${BASE_URL}/04_ui_controls/ic_common_gridview.svg`}
          width={24}
          height={24}
          style={styles.gridIcon}
        />
      </View>

      {/* 2.2 Tiêu đề màn hình */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Apps</Text>
      </View>

      {/* 2.3 Danh sách cuộn hardcode toàn bộ nội dung */}
      <ScrollView style={styles.containerFlex} showsVerticalScrollIndicator={false}>
        {/* --- NHÓM 1: WORK --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WORK</Text>
        </View>

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Approve_Now_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Approve Now</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Notify managers of pending requests and allow managers to approve/reject requests from internal tools
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Reward_Recognition_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Reward</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Send colleagues a thank you note or reward Gold for exceptional contribution
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Discipline_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Discipline</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Send a discipline warning to subordinates for violation of codes of conduct
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Learning_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Learning</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/05_ui_error/ic_favorite_pear.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>My Tasks</Text>
          </View>
        </TouchableOpacity>

        {/* --- NHÓM 2: UTILITIES --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>UTILITIES</Text>
        </View>

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/FPT_Care_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>FPT Care</Text>
            <Text style={styles.itemDesc}>FPT Care</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Events_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Events</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Register, check-in, check-out, send feedback to company events and programs
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/05_ui_error/survey_trans.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Survey</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Conduct and collect responses for company-wide or department-wide surveys
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/FPT_Dating_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>FPT Dating</Text>
            <Text style={styles.itemDesc}>Dating feature.</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/05_ui_error/payslip_trans.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Payslip</Text>
            <Text style={styles.itemDesc}>Payslip</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Birthday_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Birthday</Text>
            <Text style={styles.itemDesc} numberOfLines={3}>
              Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.
            </Text>
          </View>
        </TouchableOpacity>

        {/* --- NHÓM 3: NEWS --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>NEWS</Text>
        </View>

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/News_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>News</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              A collection of latest news and notable events around the company
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Star_Ave_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Star Ave</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Recognise notable achievements within a business unit or within FPT
            </Text>
          </View>
        </TouchableOpacity>

        {/* --- NHÓM 4: WIKI --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WIKI</Text>
        </View>

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Employee_Info_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Employee Info</Text>
            <Text style={styles.itemDesc} numberOfLines={2}>
              Basic, non-confidential employee information (name, gender, department, etc.)
            </Text>
          </View>
        </TouchableOpacity>

        {/* --- NHÓM 5: GAME --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>GAME</Text>
        </View>

        <TouchableOpacity style={styles.itemRow} activeOpacity={0.6}>
          <View style={styles.iconCircle}>
            <RemoteIcon uri={`${BASE_URL}/01_app_features/Game_transparent.png`} width={42} height={42} />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Game</Text>
            <Text style={styles.itemDesc}>Community-engaging games with Gold as rewards</Text>
          </View>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

// =========================================================================
// 3. TẦNG TRUNG GIAN: MÀN HÌNH 2 - PROFILE (HARDCODE TỪNG DÒNG ITEM)
// =========================================================================
const ProfileScreen = () => {
  return (
    <ScrollView style={styles.containerFlex} showsVerticalScrollIndicator={false}>
      {/* 3.1 Khối Banner Xanh + Avatar */}
      <View style={styles.profileHeaderBanner}>
        <View style={styles.bannerBackground} />
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarLetter}>K</Text>
          </View>
          <TouchableOpacity style={styles.cameraIconBtn} activeOpacity={0.8}>
            <RemoteIcon
              uri={`${BASE_URL}/04_ui_controls/ic_upload_camera_avatar_onboarding.svg`}
              width={30}
              height={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 3.2 Tên người dùng và ban ngành */}
      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileNameText}>Phạm Quang Khang (KHANGPQ3)</Text>
        <Text style={styles.profileDeptText}>(BM SE)</Text>
      </View>

      {/* 3.3 Menu Profile tĩnh */}
      <View style={styles.profileMenuList}>
        {/* My Profile */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/My_Profile.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>My Profile</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.profileSeparator} />

        {/* Settings */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/Settings.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>Settings</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.profileSeparator} />

        {/* Support */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/Support.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>Support</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.profileSeparator} />

        {/* FAQ */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/FAQ.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>FAQ</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.profileSeparator} />

        {/* Admin */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/Admin.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>Admin</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
        <View style={styles.profileSeparator} />

        {/* Logout */}
        <TouchableOpacity style={styles.profileMenuRow} activeOpacity={0.6}>
          <View style={styles.profileMenuLeft}>
            <RemoteIcon uri={`${BASE_URL}/02_profile_menu/Logout.svg`} width={22} height={22} />
            <Text style={styles.profileMenuTitle}>Logout</Text>
          </View>
          <Text style={styles.profileArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* 3.4 Thông tin bản quyền chân trang */}
      <View style={styles.profileFooter}>
        <Text style={styles.footerVersionText}>myFPT Version 5.9.10</Text>
        <Text style={styles.footerCopyrightText}>Copyright @ FPT Software 2021</Text>
      </View>
    </ScrollView>
  );
};

// =========================================================================
// 4. TẦNG CAO NHẤT: ROOT COMPONENT & BOTTOM NAVIGATION BAR
// =========================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState('All Apps');

  return (
    <SafeAreaView style={styles.screen}>
      {/* Hiển thị màn hình theo trạng thái Tab */}
      {activeTab === 'Profile' ? <ProfileScreen /> : <AllAppsScreen />}

      {/* Thanh Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navTab} onPress={() => setActiveTab('Home')}>
          <RemoteIcon
            uri={`${BASE_URL}/03_bottom_navigation/Home_Normal.svg`}
            width={22}
            height={22}
          />
          <Text style={[styles.navLabel, activeTab === 'Home' && styles.navLabelActive]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTab} onPress={() => setActiveTab('All Apps')}>
          <RemoteIcon
            uri={
              activeTab === 'All Apps'
                ? `${BASE_URL}/03_bottom_navigation/All_Apps_Active.svg`
                : `${BASE_URL}/03_bottom_navigation/All_Apps_Normal.svg`
            }
            width={22}
            height={22}
          />
          <Text style={[styles.navLabel, activeTab === 'All Apps' && styles.navLabelActive]}>
            All Apps
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTab} onPress={() => setActiveTab('Gold')}>
          <RemoteIcon
            uri={`${BASE_URL}/03_bottom_navigation/Gold_Normal.svg`}
            width={22}
            height={22}
          />
          <Text style={[styles.navLabel, activeTab === 'Gold' && styles.navLabelActive]}>
            Gold
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTab} onPress={() => setActiveTab('Game')}>
          <RemoteIcon
            uri={`${BASE_URL}/03_bottom_navigation/Game_Normal.svg`}
            width={22}
            height={22}
          />
          <Text style={[styles.navLabel, activeTab === 'Game' && styles.navLabelActive]}>
            Game
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTab} onPress={() => setActiveTab('Profile')}>
          <RemoteIcon
            uri={
              activeTab === 'Profile'
                ? `${BASE_URL}/03_bottom_navigation/Profile_Active.svg`
                : `${BASE_URL}/03_bottom_navigation/Profile_Normal.svg`
            }
            width={22}
            height={22}
          />
          <Text style={[styles.navLabel, activeTab === 'Profile' && styles.navLabelActive]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// =========================================================================
// 5. STYLESHEET CHI TIẾT
// =========================================================================
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 40 : 10,
  },
  containerFlex: {
    flex: 1,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 38,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingVertical: 0,
  },
  gridIcon: {
    marginLeft: 14,
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  sectionHeader: {
    backgroundColor: '#EEEEEE',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 0.5,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: 13,
    color: '#6E6E73',
    lineHeight: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E5EA',
    marginLeft: 78,
  },
  profileHeaderBanner: {
    alignItems: 'center',
    marginBottom: 12,
  },
  bannerBackground: {
    width: '92%',
    height: 120,
    backgroundColor: '#2F80ED',
    borderRadius: 12,
    marginTop: 8,
  },
  avatarWrapper: {
    position: 'relative',
    marginTop: -55,
  },
  avatarCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#DDF0FF',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#2F80ED',
  },
  cameraIconBtn: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 4,
  },
  profileDeptText: {
    fontSize: 14,
    color: '#666666',
  },
  profileMenuList: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E5EA',
  },
  profileMenuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  profileMenuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileMenuTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1A1A1A',
    marginLeft: 16,
  },
  profileArrow: {
    fontSize: 18,
    color: '#9E9E9E',
  },
  profileSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EBEBEB',
    marginLeft: 54,
  },
  profileFooter: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  footerVersionText: {
    fontSize: 13,
    color: '#777777',
    marginBottom: 4,
  },
  footerCopyrightText: {
    fontSize: 12,
    color: '#999999',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#DCDCDC',
    backgroundColor: '#FAFAFA',
  },
  navTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 11,
    color: '#8E8E93',
    marginTop: 3,
  },
  navLabelActive: {
    color: '#0066FF',
    fontWeight: '600',
  },
});